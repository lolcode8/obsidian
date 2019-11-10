import axios from "axios";

import { extractSpotifyData } from "./../../Utils/data.utils";
import { getAccessToken } from "Utils/api-calls.utils";

//TODO: Refactor to use GraphQL instead of REST
export const fetchUserProfile = async ({ accessToken }) => {
  return axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};
