import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import MyCommunities from "../components/Home/MyCommunities/MyCommunities";
import Banner from '../components/Home/Banner/Banner';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader"
import PlusButton from "../components/common/button/PlusButton/PlusButton";

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <HomeHeader/>
            <Banner/>
            <MyCommunities/>
            <PlusButton
                onPress={() => navigation.navigate('ProduceCommunityScreen')}
            />
        </SafeAreaView>
    );
}
