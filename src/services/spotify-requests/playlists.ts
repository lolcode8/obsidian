import axios from "axios";

import { getAccessTokens } from "Utils/api-calls.utils";

export const fetchPlaylistsForUser = async ({ userId }) => {
  const accessToken = await getAccessTokens();
  return axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};
