import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text> HELLO THIS IS Profile PAGE</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
