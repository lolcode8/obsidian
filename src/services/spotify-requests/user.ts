import axios from "axios";

import { extractSpotifyData } from "./../../Utils/data.utils";

//TODO: Refactor to use GraphQL instead of REST
export const fetchUserProfile = async ({ accessToken }) => {
  return axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};

export const fetchUserTopArtists = async ({ accessToken }) => {
  const result = await axios.get("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log("User's top artists are: ", extractSpotifyData(result));
};

export const fetchUserTopTracks = async ({ accessToken }) => {
  const result = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log("User's top tracks are: ", extractSpotifyData(result));
};
