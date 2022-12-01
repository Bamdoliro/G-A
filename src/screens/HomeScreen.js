import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import Banner from '../components/Home/Banner/Banner';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader"
import PlusButton from "../components/common/button/PlusButton/PlusButton";
import MyCommunity from "../components/Home/MyCommunity/MyCommunity";
import SearchResult from "../components/Home/SearchResult/SearchResult";
import {useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import {joinCommunity} from "../utils/api/community";

export default function HomeScreen({navigation}) {
    const queryClient = useQueryClient();
    const [isSearchChecking, setSearchingChecking] = useState(true);
    const [searchWord, setSearchWord] = useState(null);
    const {mutate} = useMutation(joinCommunity, {
        onSuccess: () => {
            queryClient.invalidateQueries('getMyCommunity')
        },
        onError: (data) => {
            console.log(data.message)
        }
    })

    return (
        <SafeAreaView>
            <HomeHeader
                setSearchWord={setSearchWord}
                searchWord={searchWord}
                joinCommunity={(id) => {
                    mutate({
                        id: id,
                        password: null
                    })
                }}
            />
            {
                isSearchChecking ? (
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
