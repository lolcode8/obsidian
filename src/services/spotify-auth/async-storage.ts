import { AsyncStorage } from "react-native";

//TODO: Check how to handle multiple returns types based on input type in typescript
export const getUserDataFromAsyncStorage = async ({ key }): Promise<any> => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    return error;
  }
};

export const setUserDataInAsyncStorage = async ({
  key,
  value
}): Promise<void> => {
  try {
    const result = await AsyncStorage.setItem(key, value.toString());
    return result;
  } catch (error) {
    return error;
  }
};
