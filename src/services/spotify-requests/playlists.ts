import { getAccessTokens } from "./../../utils/api-calls.utils";
import axios from "axios";

export const fetchPlaylistsForUser = async ({ userId }) => {
  const accessToken = await getAccessTokens();
  return axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};
