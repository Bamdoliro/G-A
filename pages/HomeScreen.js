import {Text} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import MainHeaderScreen from "../components/MainPage/MainHeader/MainHeaderScreen"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <MainHeaderScreen />
            <Text>HomeScreen</Text>
        </SafeAreaView>
    );
}
