import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text> HELLO THIS IS Home PAGE</Text>
      </View>
    </View>
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
