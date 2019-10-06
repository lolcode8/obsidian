import { createSwitchNavigator } from "react-navigation";

import { SCENE_IDS } from "../scene-identifiers";
import Landing from "../../scenes/landing/landing.component";

export const LandingNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.LANDING]: Landing
  },
  {
    initialRouteName: SCENE_IDS.LANDING
  }
);
