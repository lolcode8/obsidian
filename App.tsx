import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";

import { fetchTokensForApp } from "./src/services/spotify-auth/refresh-tokens";
import { getUserPlaylists } from "./src/services/spotify-auth/get-user-playlists";

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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
