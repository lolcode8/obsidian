import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { SwitchActions } from "react-navigation";

import { SCENE_IDS } from "Navigation/scene-identifiers";
import { hasUserBeenAuthenticated } from "Utils/api-calls.utils";
import { refreshTokens } from "Services/Spotify-auth/refresh-tokens";

import { landingStyles as styles } from "./landing.styles";
const ObsidianBackground = require("../../../assets/obsidian_background.png");

const Landing = ({ screenProps, navigation }) => {
  //TODO: Refactor this
  const handleGetStartedPress = () => {
    const isUserAuthenticated = hasUserBeenAuthenticated();

    if (isUserAuthenticated) {
      navigation.dispatch(
        SwitchActions.jumpTo({ routeName: SCENE_IDS.LOGGED_IN_NAVIGATOR })
      );
    } else {
      //TODO: Take the user through the spotify auth flow
      refreshTokens();
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
      <Text>Please authorize this little app to access your Spotify data</Text>
    </View>
  );
};

export default Landing;
