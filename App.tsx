import React from "react";
import { createAppContainer } from "react-navigation";
import { StyleSheet, View, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "./src/scenes/home/home.component";
import Profile from "./src/scenes/profile/profile.component";
import Discover from "./src/scenes/discover/discover.component";

import { SCENE_IDS } from "./src/navigation/scene-identifiers";
import { getUserPlaylists } from "./src/services/spotify-auth/get-user-playlists";

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button
          title={"Press me to fetch a list of playlists"}
          onPress={getUserPlaylists}
        />
      </View>
    </View>
  );
};

const TabNavigator = createBottomTabNavigator({
  [SCENE_IDS.HOME]: Home,
  [SCENE_IDS.DISCOVER]: Discover,
  [SCENE_IDS.PROFILE]: Profile
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
