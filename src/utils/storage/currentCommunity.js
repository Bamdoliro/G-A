import AsyncStorage from "@react-native-async-storage/async-storage";

export const setCurrentCommunity = async (communityId) => {
    await AsyncStorage.setItem("community", communityId.toString())
}

export const getCurrentCommunity = async () => {
    return await AsyncStorage.getItem("community");
}

export const deleteCurrentCommunity = async () => {
    await AsyncStorage.removeItem("community");
}
