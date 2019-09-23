import SpotifyWebAPI from "spotify-web-api-js";

import { refreshTokens } from "./refresh-tokens";
import { getUserData } from "./async-storage";

export const getValidSPObj = async () => {
  const tokenExpirationTime = await getUserData("expirationTime");
  if (new Date().getTime() > tokenExpirationTime) {
    // access token has expired, so we need to use the refresh token
    await refreshTokens();
  }
  const accessToken = await getUserData("accessToken");
  var sp = new SpotifyWebAPI();
  await sp.setAccessToken(accessToken);
  return sp;
};
