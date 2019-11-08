import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "Scenes/Home/home.component";
import Discover from "Scenes/Discover/discover.component";
import Profile from "Scenes/Profile/profile.component";
import { OBSIDIAN_MAGENTA, OBSIDIAN_BLACK, OBSIDIAN_GREY } from "Styles/Colors";

import { SCENE_IDS } from "../scene-identifiers";

export const LoggedInNavigator = createBottomTabNavigator(
  {
    [SCENE_IDS.HOME]: Home,
    [SCENE_IDS.DISCOVER]: Discover,
    [SCENE_IDS.PROFILE]: Profile
  },
  {
    navigationOptions: {
      tabBarLabel: "HALLO"
    },
    tabBarOptions: {
      activeTintColor: OBSIDIAN_MAGENTA,
      activeBackgroundColor: OBSIDIAN_GREY,
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: OBSIDIAN_BLACK
      }
    }
  }
);
