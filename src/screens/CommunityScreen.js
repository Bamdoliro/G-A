import {ScrollView, StyleSheet, View} from "react-native";
import {useState} from "react";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import GatiFeedFrame from "../components/Feed/ListFrame/GatiFeedFrame";
import FeedFrame from "../components/Feed/ListFrame/FeedFrame";
import PlusButton from "../components/common/button/PlusButton/PlusButton";
import GatiButton from "../components/common/button/GatiButton/GatiButton";
import Category from "../components/Community/Category/Category";
import ChangeCommunityModal from "../components/Community/ChangeCommunity/ChangeCommunityModal";

export default function CommunityScreen({navigation}) {
    const [category, setCategory] = useState("FEED");
    const [changeCommunityModalIsOpen, setChangeCommunityModalIsOpen] = useState(false);

    return (
        <SafeAreaView>
            <CommunityHeader
                setChangeCommunityModalIsOpen={setChangeCommunityModalIsOpen}
            />
            <View
                style={styles.contents}
            >
                <Category
                    category={category}
                    setCategory={setCategory}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {
                        category === "GATI" ? <GatiFeedFrame/> : <FeedFrame/>
                    }
                </ScrollView>
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
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contents: {
        paddingHorizontal: 30,
    }
})
