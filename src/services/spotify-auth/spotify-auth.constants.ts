// These are the auth scopes the user is requested to grant
// Can change these if app required different scopes
// https://developer.spotify.com/documentation/general/guides/scopes/
export const REQUESTED_SCOPES = [
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-modify",
  "user-library-read",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-recently-played",
  "user-top-read"
];

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const EXPIRATION_TIME = "expirationTime";

export const AUTH_KEYS = [ACCESS_TOKEN, REFRESH_TOKEN, EXPIRATION_TIME];
