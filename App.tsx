import React from "react";
import { createAppContainer } from "react-navigation";
import { StyleSheet, View, Button } from "react-native";

import { AppNavigator } from "./src/Navigation";

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
