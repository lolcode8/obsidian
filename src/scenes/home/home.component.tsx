import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { AppThemeContext } from "Styles/Themes";
import { fetchUserTopTracks } from "Services/Spotify-requests/tracks";
import { fetchUserTopArtists } from "Services/Spotify-requests/artists";
import { fetchUserPlaylists } from "Services/Spotify-requests/playlists";

const Home = () => {
  const AppTheme = useContext(AppThemeContext);

  return (
    <ThemeProvider theme={AppTheme}>
      <View style={styles.container}>
        <View>
          <Button title={"Fetch top playlists"} onPress={fetchUserPlaylists} />
          <Button title={"Fetch top artists"} onPress={fetchUserTopArtists} />
          <Button title={"Fetch top tracks"} onPress={fetchUserTopTracks} />
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
