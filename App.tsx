import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { refreshTokens } from "./src/services/spotify-auth/refresh-tokens";
import { getUserData } from "./src/services/spotify-auth/async-storage";
import { getUserPlaylists } from "./src/services/spotify-auth/get-user-playlists";

export default class App extends React.Component {
  async componentDidMount() {
    const tokenExpirationTime = await getUserData("expirationTime");

    if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
      await refreshTokens();
    } else {
      this.setState({ accessTokenAvailable: true });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <View>
          <Button title={"Press mee pls"} onPress={() => getUserPlaylists()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
