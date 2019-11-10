import { environmentVariable } from "Utils/env-vars.utils";
import { currentDateTimeInUTC } from "Utils/date.utils";

import { getAuthorizationCode } from "./get-auth-code";
import { AUTH_KEYS, REFRESH_TOKEN } from "./spotify-auth.constants";
import {
  getUserDataFromAsyncStorage,
  setUserDataInAsyncStorage
} from "./async-storage";

export const fetchSpotifyTokens = async () => {
  try {
    const tokenExpirationTime = await getUserDataFromAsyncStorage({
      key: "expirationTime"
    });
    if (!tokenExpirationTime || currentDateTimeInUTC() > tokenExpirationTime)
      await fetchTokensFromSpotifyAuthServer();
  } catch (error) {
    console.error("Error at fetchSpotifyTokens", error);
  }
};

const fetchTokensFromSpotifyAuthServer = async () => {
  const refreshToken = await getUserDataFromAsyncStorage({
    key: REFRESH_TOKEN
  });

  const authResponse = refreshToken
    ? await getAuthTokensWithRefreshToken({ refreshToken })
    : await getAuthTokensWithCodeToken();

  setAuthTokensInStorage({ authResponse });
};

const getAuthTokensWithCodeToken = async () => {
  try {
    const authorizationCode = await getAuthorizationCode(); //we wrote this function above
    const credsB64 = btoa(
      `${environmentVariable({ query: "CLIENT_ID" })}:${environmentVariable({
        query: "CLIENT_SECRET"
      })}`
    );
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credsB64}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${environmentVariable(
        { query: "REDIRECT_URL" }
      )}`
    });
    const authResponse = await response.json();
    return authResponse;
  } catch (err) {
    console.error(err);
  }
};

const getAuthTokensWithRefreshToken = async ({ refreshToken }) => {
  const credsB64 = btoa(
    `${environmentVariable({ query: "CLIENT_ID" })}:${environmentVariable({
      query: "CLIENT_SECRET"
    })}`
  );
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credsB64}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=refresh_token&refresh_token=${refreshToken}`
  });

  const authResponse = await response.json();
  return authResponse;
};

const setAuthTokensInStorage = ({ authResponse }) => {
  const { access_token, refresh_token, expires_in } = authResponse;

  const EXPIRATION_TIME = currentDateTimeInUTC() + expires_in * 1000;
  const authData = [access_token, refresh_token, EXPIRATION_TIME];

  AUTH_KEYS.map(
    async (authKey, index) =>
      await setUserDataInAsyncStorage({
        key: authKey,
        value: authData[index]
      })
  );
};
