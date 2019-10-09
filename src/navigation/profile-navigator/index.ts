import { createSwitchNavigator } from "react-navigation";

import Profile from "Scenes/Profile/profile.component";

import { SCENE_IDS } from "../scene-identifiers"; 

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
