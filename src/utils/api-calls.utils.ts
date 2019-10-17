import { refreshTokens } from "Services/Spotify-auth/refresh-tokens";
import { getUserDataFromAsyncStorage } from "Services/Spotify-auth/async-storage";

export const getAccessTokens = async () => {
  // First get the userID
  const tokenExpirationTime = await getUserDataFromAsyncStorage(
    "expirationTime"
  );
  if (new Date().getTime() > tokenExpirationTime) {
    // Access token has expired, so we need to use the refresh token
    await refreshTokens();
  }

  const accessToken = await getUserDataFromAsyncStorage("accessToken");
  return accessToken;
};
