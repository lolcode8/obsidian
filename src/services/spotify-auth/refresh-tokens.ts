import { environmentVariable } from "Utils/env-vars.utils";

import {
  getUserDataFromAsyncStorage,
  setUserDataInAsyncStorage
} from "./async-storage";
import { getAuthorizationCode } from "./get-auth-code";

export const refreshTokens = async () => {
  try {
    const credsB64 = btoa(
      `${environmentVariable({ query: "CLIENT_ID" })}:${environmentVariable({
        query: "CLIENT_SECRET"
      })}`
    );
    const refreshToken = await getUserDataFromAsyncStorage("refreshToken");
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credsB64}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`
    });
    const responseJson = await response.json();
    if (responseJson.error) {
      await getTokens();
    } else {
      const {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        expires_in: expiresIn
      } = responseJson;

      const expirationTime = new Date().getTime() + expiresIn * 1000;
      await setUserDataInAsyncStorage("accessToken", newAccessToken);
      if (newRefreshToken) {
        await setUserDataInAsyncStorage("refreshToken", newRefreshToken);
      }
      await setUserDataInAsyncStorage("expirationTime", expirationTime);
    }
  } catch (err) {
    console.error("Error fetching refresh tokens", err);
  }
};

export const fetchTokensForApp = async () => {
  const tokenExpirationTime = await getUserDataFromAsyncStorage(
    "expirationTime"
  );
  if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
    await refreshTokens();
  }
  // Else it means you already have the tokens
};

const getTokens = async () => {
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
    const responseJson = await response.json();
    // destructure the response and rename the properties to be in camelCase to satisfy my linter ;)
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn
    } = responseJson;

    const expirationTime = new Date().getTime() + expiresIn * 1000;

    await setUserDataInAsyncStorage("accessToken", accessToken);
    await setUserDataInAsyncStorage("refreshToken", refreshToken);
    await setUserDataInAsyncStorage("expirationTime", expirationTime);
  } catch (err) {
    console.error(err);
  }
};
