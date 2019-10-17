import axios from "axios";

import { extractSpotifyData } from "./../../Utils/data.utils";

import { getAccessTokens } from "Utils/api-calls.utils";

export const fetchUserProfile = async () => {
  const accessToken = await getAccessTokens();
  return axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};

export const fetchUserTopArtists = async () => {
  const accessToken = await getAccessTokens();
  const result = await axios.get("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  console.log("User's top artists are: ", extractSpotifyData(result));
};

export const fetchUserTopTracks = async () => {
  const accessToken = await getAccessTokens();
  const result = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log("User's top tracks are: ", extractSpotifyData(result));
};
