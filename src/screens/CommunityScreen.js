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
            <CommunityPostModifyScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})
