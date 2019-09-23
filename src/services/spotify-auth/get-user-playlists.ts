import { getValidSPObj } from "./get-valid-spotify-object";

export const getUserPlaylists = async () => {
  const sp = await getValidSPObj();
  console.log("SP: ", sp);
  const { id: userId } = await sp.getMe();
  console.log("userId", userId);
  const { items: playlists } = await sp.getUserPlaylists(userId, { limit: 50 });
  console.log("playlists", playlists);
  return playlists;
};
