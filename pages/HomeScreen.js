import {Text} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import MyCommunities from "../components/MainPage/MyCommunities/MyCommunities"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <MyCommunities />
        </SafeAreaView>
    );
}
