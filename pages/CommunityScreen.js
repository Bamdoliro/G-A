import {Text} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import PostDetailScreen from "../components/PostDetailPage/PostDetailScreen";

export default function CommunityScreen() {
    return (
        <SafeAreaView>
            <Text>CommunityScreen</Text>
            <PostDetailScreen />
        </SafeAreaView>
    );
}
