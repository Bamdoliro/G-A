import {StyleSheet, View} from "react-native";
import {useState} from "react";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import GatiFeedFrame from "../components/Feed/ListFrame/GatiFeedFrame";
import FeedFrame from "../components/Feed/ListFrame/FeedFrame";
import PlusButton from "../components/common/button/PlusButton/PlusButton";
import GatiButton from "../components/common/button/GatiButton/GatiButton";
import Category from "../components/Community/Category/Category";
import ChangeCommunityModal from "../components/Community/ChangeCommunity/ChangeCommunityModal";
import {useQuery} from "react-query";
import {getCommunityDetail} from "../utils/api/community";
import {getCurrentCommunity} from "../utils/storage/currentCommunity";
import {getFeedsByCommunity} from "../utils/api/feed";
import {getDdoByCommunity} from "../utils/api/ddo";

export default function CommunityScreen({navigation, socket}) {
    const [category, setCategory] = useState("FEED");
    const [changeCommunityModalIsOpen, setChangeCommunityModalIsOpen] = useState(false);
    const communityDetail = useQuery('getCommunityDetail', async () => getCommunityDetail(await getCurrentCommunity()))
    const feeds = useQuery('getFeedsByCommunity', async () => getFeedsByCommunity(await getCurrentCommunity()))
    const ddo = useQuery('getDdoByCommunity', async () => getDdoByCommunity(await getCurrentCommunity()))

    return (
        <SafeAreaView>
            <CommunityHeader
                data={communityDetail?.data}
                setChangeCommunityModalIsOpen={setChangeCommunityModalIsOpen}
            />
            <View
                style={styles.contents}
            >
                <Category
                    category={category}
                    setCategory={setCategory}
                />
                {category === "GATI" ?
                    <GatiFeedFrame
                        data={ddo?.data}
                        socket={socket}
                    />
                    :
                    <FeedFrame
                        data={feeds?.data}
                    />
                }
            </View>
            {category === "GATI" ?
                <GatiButton
                    onPress={() => navigation.navigate('WriteGatiScreen')}
                />
                :
                <PlusButton
                    onPress={() => navigation.navigate('WritePostScreen')}
                />
            }

            <ChangeCommunityModal
                isOpen={changeCommunityModalIsOpen}
                setIsOpen={setChangeCommunityModalIsOpen}
                communityRefetch={() => {
                    communityDetail?.refetch();
                    feeds?.refetch();
                    ddo?.refetch();
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contents: {
        paddingHorizontal: 30,
        flex: 1,
    }
})
