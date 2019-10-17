import { fetchUserProfile } from "Services/Spotify-requests/user";
import { fetchPlaylistsForUser } from "Services/Spotify-requests/playlists";
import { ID } from "Api-transform/user";

export const fetchUserPlaylists = async () => {
  const userProfile = await fetchUserProfile();

  const userId = userProfile.data[ID];
  const playlistsForUser = await fetchPlaylistsForUser({ userId });
  console.log("playlistsForUser", playlistsForUser);
};
