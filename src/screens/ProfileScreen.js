import {Text, View} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CustomButton from "../components/common/CustomButton/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {baseUrl} from "../utils/api/urls";

export default function ProfileScreen() {
    const logoutUser = async () => {
        try {
            const accessToken = await AsyncStorage.getItem("access-token");
            await AsyncStorage.removeItem("access-token");
            const response = await axios.delete(`${baseUrl}/auth`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView>
            <CustomButton
                title="로그아웃"
                onPress={logoutUser}
            />
        </SafeAreaView>
    );
}
