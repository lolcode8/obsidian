import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";

import { fetchTokensForApp } from "../../services/spotify-auth/refresh-tokens";
import { getUserPlaylists } from "../../services/spotify-auth/get-user-playlists";

const Home = () => {
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
