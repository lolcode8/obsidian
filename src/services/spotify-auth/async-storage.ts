import { AsyncStorage } from "react-native";

export const getUserData = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    return error;
  }
};

export const setUserData = async (key, value) => {
  try {
    const result = await AsyncStorage.setItem(key, value.toString());
    return result;
  } catch (error) {
    return error;
  }
};
