import {ScrollView, StyleSheet, Text} from "react-native";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";

import PostList from '../components/CommunityPostPage/PostList/PostList';
import GatiPostList from '../components/CommunityPostPage/GatiPostList/GatiPostList';
import CommunityReportScreen from './CommunityReportScreen';
import CommunityPostModifyScreen from "./CommunityPostModifyScreen";

export default function CommunityScreen({navigation}) {
    const ClickAddPostBtn = () => {
        navigation.navigate('GatiProduceScreen')
    }

    return (
        <SafeAreaView>
            <CommunityHeader joinMembers={"125"}/>
            <ScrollView contentContainerStyle={{alignItems: "center"}}>
                <PostList
                    Title="세탁기 빨래 본인 것만 가져가 주세요..."
                    Explanation="요즘에 세탁물 분실 사례가 너무 많은데
                    본인 빨래만 가져가고 본인 빨래가 아니다
                    싶으면 세탁실에 다시 돌려 놓아 주세요..."
                    ChatOfNumber={10}
                    LikeOfNumber={10}
                    navigation={navigation}
                />
                <GatiPostList
                    Title="세탁기 빨래 본인 것만 가져가 주세요..."
                    HumanOfNumber={10}
                    Date="05/23 ~ 06/23"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})
