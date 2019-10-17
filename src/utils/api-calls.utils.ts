import { currentDateTimeInUTC } from "./date.utils";
import { refreshTokens } from "Services/Spotify-auth/refresh-tokens";
import { getUserDataFromAsyncStorage } from "Services/Spotify-auth/async-storage";

export const getAccessTokens = async () => {
  const tokenExpirationTime = await getUserDataFromAsyncStorage({
    key: "expirationTime"
  });

  if (currentDateTimeInUTC() > tokenExpirationTime) {
    await refreshTokens();
  }

  const accessToken = await getUserDataFromAsyncStorage({ key: "accessToken" });
  return accessToken;
};
