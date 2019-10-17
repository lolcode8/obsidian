import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { AppThemeContext } from "Styles/Themes";
import { getAccessTokens } from "Utils/api-calls.utils";
import { fetchUserPlaylists } from "Services/Spotify-auth/get-user-playlists";
import {
  fetchUserTopArtists,
  fetchUserTopTracks
} from "Services/Spotify-requests/user";

//TODO: Remove the async if you are unable to get access tokens
const Home = async () => {
  const AppTheme = useContext(AppThemeContext);
  const accessToken = await getAccessTokens();

  return (
    <ThemeProvider theme={AppTheme}>
      <View style={styles.container}>
        <View>
          <Button
            title={"Fetch my user profile"}
            onPress={() => fetchUserPlaylists({ accessToken })}
          />
          <Button
            title={"Fetch my top artists"}
            onPress={() => fetchUserTopArtists({ accessToken })}
          />
          <Button
            title={"Fetch my top tracks"}
            onPress={() => fetchUserTopTracks({ accessToken })}
          />
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
