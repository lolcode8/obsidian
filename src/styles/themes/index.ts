import React from "react";
import { BUTTON_THEME } from "./buttons";
import { AVATAR_THEME } from "./avatar";

export const AppThemeContext = React.createContext({
  Button: BUTTON_THEME,
  Avatar: AVATAR_THEME
});
