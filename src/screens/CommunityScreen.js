import {ScrollView, StyleSheet} from "react-native";
import {useState} from "react";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import GatiFrame from "../components/CommunityPostPage/ListFrame/GatiFrame";
import PostFrame from "../components/CommunityPostPage/ListFrame/PostFrame";
import PlusButton from "../components/common/PlusButton/PlusButton";
import GatiButton from "../components/common/GatiButton/GatiButton";

export default function CommunityScreen({navigation}) {
    const [isChoiceBtn, setChoiceBtn] = useState(true);

    return (
        <SafeAreaView>
            <CommunityHeader
                isChoiceBtn={isChoiceBtn}
                setChoiceBtn={setChoiceBtn}
            />
            <ScrollView contentContainerStyle={{alignItems: "center"}}>
                {
                    isChoiceBtn ? <GatiFrame/> : <PostFrame/>
                }
            </ScrollView>
            {isChoiceBtn ?
                <GatiButton
                    onPress={() => navigation.navigate('WriteGatiScreen')}
                />
                :
                <PlusButton
                    onPress={() => navigation.navigate('WritePostScreen')}
                />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})
