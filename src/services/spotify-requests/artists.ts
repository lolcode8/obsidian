import Axios from "axios";

import { getAccessTokens } from "Utils/api-calls.utils";
import { extractSpotifyData } from "Utils/data.utils";

export const fetchUserTopArtists = async () => {
  const accessToken = await getAccessTokens();
  const result = await Axios.get("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log("User's top artists are: ", extractSpotifyData(result));
};
