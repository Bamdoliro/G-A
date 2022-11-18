import { ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import GatiFrame from "../components/CommunityPostPage/ListFrame/GatiFrame";
import PostFrame from "../components/CommunityPostPage/ListFrame/PostFrame";

export default function CommunityScreen({navigation}) {
    // useState 로 props 보내서 페이지 체인지하는 코드 짯는데 요부분
    // 코드 리뷰좀 부탁드려요 - 석진 -
    const [isChoiceBtn, setChoiceBtn] = useState(true);

    return (
        <SafeAreaView>
            <CommunityHeader
                isChoiceBtn={isChoiceBtn}
                setChoiceBtn={setChoiceBtn}
            />
            <ScrollView contentContainerStyle={{alignItems: "center"}}>
                {
                    isChoiceBtn ? <GatiFrame /> : <PostFrame navigation={navigation}/>
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})
