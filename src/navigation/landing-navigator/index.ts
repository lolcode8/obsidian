import { createSwitchNavigator } from "react-navigation";

import Landing from "Scenes/Landing/landing.component";

import { SCENE_IDS } from "../scene-identifiers";

export const LandingNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.LANDING]: Landing
  },
  {
    initialRouteName: SCENE_IDS.LANDING
  }
);
