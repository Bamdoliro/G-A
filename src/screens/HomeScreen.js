import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import Banner from '../components/Home/Banner/Banner';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader"
import PlusButton from "../components/common/button/PlusButton/PlusButton";
import MyCommunity from "../components/Home/MyCommunity/MyCommunity";
import SearchResult from "../components/Home/SearchResult/SearchResult";
import {useState} from "react";

export default function HomeScreen({navigation}) {

    const [isSearching, setSearching] = useState(false);

    return (
        <SafeAreaView>
            <HomeHeader/>
            {
                isSearching ? (
                    <>
                        <Banner/>
                        <MyCommunity />
                    </>
                ) : (
                    <SearchResult   
                        navigation={navigation}
                        SearchWord="부산"
                        numberOfSearches={2}
                    />
                )
            }
            <PlusButton
                onPress={() => navigation.navigate('ProduceCommunityScreen')}
            />
        </SafeAreaView>
    );
}
