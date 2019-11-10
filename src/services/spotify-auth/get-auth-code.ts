import { AuthSession } from "expo";

import { environmentVariable } from "Utils/env-vars.utils";
import { REQUESTED_SCOPES } from "Services/Spotify-auth/spotify-auth.constants";

const scopes = REQUESTED_SCOPES.join(" ");

// To obtain intial access token from the Spotify auth server
export const getAuthorizationCode = async () => {
  try {
    console.log("Attempting to get auth code from Spotify");
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl:
        "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" +
        environmentVariable({ query: "CLIENT_ID" }) +
        (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
        "&redirect_uri=" +
        encodeURIComponent(redirectUrl)
    });
    return result.params.code;
  } catch (err) {
    console.error("Error getting auth code", err);
  }
};
