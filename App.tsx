import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { fetchTokensForApp } from "./src/services/spotify-auth/refresh-tokens";
import { getUserPlaylists } from "./src/services/spotify-auth/get-user-playlists";
import Home from "./src/scenes/home/home.component";
import Discover from "./src/scenes/discover/discover.component";
import Profile from "./src/scenes/profile/profile.component";

const App = () => {
  useEffect(() => {
    fetchTokensForApp();
  });

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
  Home: Home,
  Discover: Discover,
  Profile: Profile
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
