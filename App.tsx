import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, processColor } from "react-native";

import { refreshTokens } from "./src/services/spotify-auth/refresh-tokens";
import { getUserData } from "./src/services/spotify-auth/async-storage";
import { getUserPlaylists } from "./src/services/spotify-auth/get-user-playlists";
import { environmentVariable } from "./src/utils/env-vars";

const App = () => {
  useEffect(() => {
    const fetchTokens = async () => {
      const tokenExpirationTime = await getUserData("expirationTime");
      if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
        await refreshTokens();
      }
      // Else it means you already have the tokens
    };

    fetchTokens();
  });

  return (
    <View style={styles.container}>
      <View>
        <Button
          title={"Press me to fetch a list of playlists"}
          onPress={() => getUserPlaylists()}
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
