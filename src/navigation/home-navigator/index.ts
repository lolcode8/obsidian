import { createSwitchNavigator } from "react-navigation";

import { SCENE_IDS } from "../scene-identifiers";
import Home from "../../scenes/home/home.component";

const HomeNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.HOME]: Home
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default HomeNavigator;
