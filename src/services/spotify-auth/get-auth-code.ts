import { AuthSession } from "expo";

import { environmentVariable } from "Utils/env-vars.utils";
import { REQUESTED_SCOPES } from "Services/Spotify-auth/spotify-auth.constants";

const scopes = REQUESTED_SCOPES.join(" ");

export const getAuthorizationCode = async () => {
  try {
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
    console.log("Result is: ", result);
    return result.params.code;
  } catch (err) {
    console.error("Error getting auth code", err);
  }
};
