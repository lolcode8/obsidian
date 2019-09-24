import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "react-native-dotenv"; // eslint-disable-line

const AVAILABLE_VARIABLES = {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
};

export const environmentVariable = (query: string) => {
  if (typeof AVAILABLE_VARIABLES[query] === "undefined") {
    return false;
  } else if (AVAILABLE_VARIABLES[query].toLowerCase() === "true") {
    return true;
  } else if (AVAILABLE_VARIABLES[query].toLowerCase() === "false") {
    return false;
  }
  return AVAILABLE_VARIABLES[query];
};
