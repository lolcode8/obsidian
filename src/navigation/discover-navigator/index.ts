import { createSwitchNavigator } from "react-navigation";

import Discover from "Scenes/Discover/discover.component";

import { SCENE_IDS } from "../scene-identifiers";

const DiscoverNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.DISCOVER]: Discover
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default DiscoverNavigator;
