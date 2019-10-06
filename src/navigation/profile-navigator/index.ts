import { createSwitchNavigator } from "react-navigation";

import { SCENE_IDS } from "../scene-identifiers";
import Profile from "../../scenes/profile/profile.component";

const ProfileNavigator = createSwitchNavigator(
  {
    [SCENE_IDS.PROFILE]: Profile
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default ProfileNavigator;
