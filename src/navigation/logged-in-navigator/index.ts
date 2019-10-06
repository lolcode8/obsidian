import { createBottomTabNavigator } from "react-navigation-tabs";
import { SCENE_IDS } from "../scene-identifiers";
import Home from "../../scenes/home/home.component";
import Discover from "../../scenes/discover/discover.component";
import Profile from "../../scenes/profile/profile.component";

export const LoggedInNavigator = createBottomTabNavigator({
  [SCENE_IDS.HOME]: Home,
  [SCENE_IDS.DISCOVER]: Discover,
  [SCENE_IDS.PROFILE]: Profile
});
