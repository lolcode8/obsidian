import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>THIS IS A LANDING PAGE</Text>
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
