import { createSwitchNavigator } from "react-navigation";

import Home from "Scenes/Home/home.component";

import { SCENE_IDS } from "../scene-identifiers";

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
