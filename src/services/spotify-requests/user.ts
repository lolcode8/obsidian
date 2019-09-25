import axios from "axios";

import { getAccessTokens } from "./../../utils/api-calls.utils";

export const fetchUserProfile = async () => {
  const accessToken = await getAccessTokens();
  return axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};
