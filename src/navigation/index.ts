import { createSwitchNavigator } from "react-navigation";

import { SCENE_IDS } from "./scene-identifiers";
import { LandingNavigator } from "./landing-navigator";
import { LoggedInNavigator } from "./logged-in-navigator";

export const AppNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.LANDING_NAVIGATOR]: LandingNavigator,
    [SCENE_IDS.LOGGED_IN_NAVIGATOR]: LoggedInNavigator
  },
  {
    initialRouteName: SCENE_IDS.LANDING_NAVIGATOR
  }
);
