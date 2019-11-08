import axios from "axios";

import { getAccessTokens } from "Utils/api-calls.utils";
import { extractSpotifyData } from "Utils/data.utils";
import { ID } from "Api-transform/user";

import { fetchUserProfile } from "./user";

export const fetchUserPlaylists = async () => {
  const accessToken = await getAccessTokens();
  const userProfile = await fetchUserProfile({ accessToken });

  const userId = userProfile.data[ID];
  const result = await axios.get(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  console.log("User's top playlists are: ", extractSpotifyData(result));
};
