import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUser = async (userId) => {
    await AsyncStorage.setItem("user", userId)
}

export const getUser = async () => {
    return await AsyncStorage.getItem("user");
}

export const deleteUser = async () => {
    await AsyncStorage.removeItem("user");
}
