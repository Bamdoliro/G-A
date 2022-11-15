import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () => {
    return await AsyncStorage.getItem("access-token");
}

export const getRefreshToken = async () => {
    return await AsyncStorage.getItem("refresh-token");
}
