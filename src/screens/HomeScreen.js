import {Text} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import MyCommunities from "../components/MainPage/MyCommunities/MyCommunities";
import MainBanner from '../components/MainPage/MainBanner/MainBanner';
import MainHeaderScreen from "../components/MainPage/MainHeader/MainHeaderScreen"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <MainHeaderScreen />
            <MainBanner />
            <MyCommunities />
        </SafeAreaView>
    );
}
