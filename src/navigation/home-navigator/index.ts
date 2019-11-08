import { createSwitchNavigator } from "react-navigation";

import Home from "Scenes/Home/home.component";

import { SCENE_IDS } from "../scene-identifiers";

const HomeNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.HOME]: Home
  },
  {
    navigationOptions: {
      headerTitle: "HOME"
    }
  }
);

export default HomeNavigator;
