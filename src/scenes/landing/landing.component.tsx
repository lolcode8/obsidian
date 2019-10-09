import React from "react";
import { StyleSheet, View, Text } from "react-native";  
import { Button } from "react-native-elements";
import { SwitchActions } from "react-navigation";
import { SCENE_IDS } from "../../Navigation/scene-identifiers";

const Landing = ({ screenProps, navigation }) => {
  //TODO: Refactor this + Send to the spotify auth page
  const handleGetStartedPress = () => {
    navigation.dispatch(
      SwitchActions.jumpTo({ routeName: SCENE_IDS.LOGGED_IN_NAVIGATOR })
    );
  };

  return (
    <View style={styles.container}>
      <Text>THIS IS A LANDING PAGE</Text>
      <Button title="Get Started" onPress={handleGetStartedPress} />
      <Text>Please authorize this little app to access your Spotify data</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
