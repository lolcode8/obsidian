import React, { useEffect } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import { SwitchActions } from "react-navigation";

import { SCENE_IDS } from "Navigation/scene-identifiers";
import { hasUserBeenAuthenticated } from "Utils/api-calls.utils";
import { fetchSpotifyTokens } from "Services/Spotify-auth/spotify-auth-handlers";

import { landingStyles as styles } from "./landing.styles";
const ObsidianBackground = require("../../../assets/obsidian_background.png");

const Landing = ({ screenProps, navigation }) => {
  const handleGetStartedPress = async () => {
    const isUserAuthenticated = await hasUserBeenAuthenticated();

    if (isUserAuthenticated) {
      navigation.dispatch(
        SwitchActions.jumpTo({ routeName: SCENE_IDS.LOGGED_IN_NAVIGATOR })
      );
    } else {
      fetchSpotifyTokens();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={ObsidianBackground} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={handleGetStartedPress}
          linearGradientProps={{
            colors: ["magenta", "pink"],
            start: { x: 0, y: 0.8 },
            end: { x: 1, y: 0.5 }
          }}
          buttonStyle={styles.getStartedButton}
        />
      </View>
    </View>
  );
};

export default Landing;
