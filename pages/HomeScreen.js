import {Text} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import MainBanner from '../components/MainPage/MainBanner/MainBanner';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
            <MainBanner />
        </SafeAreaView>
    );
}
