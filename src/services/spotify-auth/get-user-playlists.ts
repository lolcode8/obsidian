import { fetchUserProfile } from "./../spotify-requests/user";
import { fetchPlaylistsForUser } from "./../spotify-requests/playlists";
import { ID } from "../../api-transform/user";

export const getUserPlaylists = async () => {
  const userProfile = await fetchUserProfile();

  const userId = userProfile.data[ID];
  const playlistsForUser = await fetchPlaylistsForUser({ userId });
  console.log("playlistsForUser", playlistsForUser);
};
