import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAccessToken = async (token) => {
    await  AsyncStorage.setItem("access-token", token)
}

export const getAccessToken = async () => {
    return await AsyncStorage.getItem("access-token");
}

export const deleteAccessToken = async () => {
    await AsyncStorage.removeItem("access-token");
}

export const setRefreshToken = async (token) => {
    await  AsyncStorage.setItem("refresh-token", token)
}

export const getRefreshToken = async () => {
    return await AsyncStorage.getItem("refresh-token");
}

export const deleteRefreshToken = async () => {
    await AsyncStorage.removeItem("refresh-token");
}
