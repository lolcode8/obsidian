import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { AppThemeContext } from "Styles/Themes";
import { fetchUserTopTracks } from "Services/Spotify-requests/tracks";
import { fetchUserTopArtists } from "Services/Spotify-requests/artists";
import { fetchUserPlaylists } from "Services/Spotify-requests/playlists";

import { homeStyles } from "./home.styles";

const Home = () => {
  const AppTheme = useContext(AppThemeContext);

  return (
    <ThemeProvider theme={AppTheme}>
      <View style={homeStyles.container}>
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
