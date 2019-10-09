import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

import { AppThemeContext } from "Styles/Themes";
import { getUserPlaylists } from "Services/Spotify-auth/get-user-playlists";

const Home = () => {
  const AppTheme = useContext(AppThemeContext);

  return (
    <ThemeProvider theme={AppTheme}>
      <View style={styles.container}>
        <View>
          <Button
            title={"Press me to fetch a list of playlists"}
            // onPress={getUserPlaylists}
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
