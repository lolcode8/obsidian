import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { AppThemeContext } from "Styles/Themes";
import { fetchUserPlaylists } from "Services/Spotify-auth/get-user-playlists";
import {
  fetchUserTopArtists,
  fetchUserTopTracks
} from "Services/Spotify-requests/user";

const Home = () => {
  const AppTheme = useContext(AppThemeContext);

  return (
    <ThemeProvider theme={AppTheme}>
      <View style={styles.container}>
        <View>
          <Button
            title={"Fetch my user profile"}
            onPress={fetchUserPlaylists}
          />
          <Button
            title={"Fetch my top artists"}
            onPress={fetchUserTopArtists}
          />
          <Button title={"Fetch my top tracks"} onPress={fetchUserTopTracks} />
        </View>
      </View>
    </ThemeProvider>
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
