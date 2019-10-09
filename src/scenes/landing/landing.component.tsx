import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>THIS IS A LANDING PAGE</Text>
      <Button title="Get Started" />
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
