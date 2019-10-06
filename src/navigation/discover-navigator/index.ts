import { createSwitchNavigator } from "react-navigation";

import { SCENE_IDS } from "../scene-identifiers";
import Discover from "../../scenes/discover/discover.component";

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
