import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import MyCommunities from "../components/MainPage/MyCommunities/MyCommunities";
import MainBanner from '../components/MainPage/MainBanner/MainBanner';
import MainHeaderScreen from "../components/MainPage/MainHeader/MainHeaderScreen"
import PlusButton from "../components/common/PlusButton/PlusButton";

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <MainHeaderScreen/>
            <MainBanner/>
            <MyCommunities/>
            <PlusButton
                onPress={() => navigation.navigate('ProduceCommunityScreen')}
            />
        </SafeAreaView>
    );
}
