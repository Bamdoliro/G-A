import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import Banner from '../components/Home/Banner/Banner';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader"
import PlusButton from "../components/common/button/PlusButton/PlusButton";
import MyCommunity from "../components/Home/MyCommunity/MyCommunity";

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <HomeHeader/>
            <Banner/>
            <MyCommunity />
            <PlusButton
                onPress={() => navigation.navigate('ProduceCommunityScreen')}
            />
        </SafeAreaView>
    );
}
