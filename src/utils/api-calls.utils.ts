import R from "ramda";

import { getUserDataFromAsyncStorage } from "Services/Spotify-auth/async-storage";
import { refreshTokens } from "Services/Spotify-auth/refresh-tokens";

import { currentDateTimeInUTC } from "./date.utils";

export const getAccessTokens = async (): Promise<string> => {
  const tokenExpirationTime = await getUserDataFromAsyncStorage({
    key: "expirationTime"
  });

  if (currentDateTimeInUTC() > tokenExpirationTime) {
    await refreshTokens();
  }

  const accessToken = await getUserDataFromAsyncStorage({ key: "accessToken" });
  return accessToken;
};

export const hasUserBeenAuthenticated = async (): Promise<boolean> => {
  const accessToken = await getUserDataFromAsyncStorage({
    key: "accessToken"
  });

  const refreshToken = await getUserDataFromAsyncStorage({
    key: "refreshToken"
  });

  return R.and(!!accessToken, !!refreshToken);
};
