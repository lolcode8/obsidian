import R from "ramda";

import { getUserDataFromAsyncStorage } from "Services/Spotify-auth/async-storage";
import { fetchSpotifyTokens } from "Services/Spotify-auth/spotify-auth-handlers";

export const getAccessToken = async (): Promise<String> => {
  await fetchSpotifyTokens();
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
