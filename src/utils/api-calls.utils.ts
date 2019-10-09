import { refreshTokens } from "Services/spotify-auth/refresh-tokens";
import { getUserData } from "Services/spotify-auth/async-storage";

export const getAccessTokens = async () => {
  // First get the userID
  const tokenExpirationTime = await getUserData("expirationTime");
  if (new Date().getTime() > tokenExpirationTime) {
    // Access token has expired, so we need to use the refresh token
    await refreshTokens();
  }

  const accessToken = await getUserData("accessToken");
  return accessToken;
};
