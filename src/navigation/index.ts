import { createSwitchNavigator } from "react-navigation";

import { LandingNavigator } from "./Landing-navigator";
import { LoggedInNavigator } from "./Logged-in-navigator";
import { SCENE_IDS } from "./scene-identifiers";

export const AppNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.LANDING_NAVIGATOR]: LandingNavigator,
    [SCENE_IDS.LOGGED_IN_NAVIGATOR]: LoggedInNavigator
  },
  {
    initialRouteName: SCENE_IDS.LANDING_NAVIGATOR
  }
);
