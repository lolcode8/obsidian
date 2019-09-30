import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Discover = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text> HELLO THIS IS Discover PAGE</Text>
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
