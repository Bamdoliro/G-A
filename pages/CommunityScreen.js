import {Text} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import PostList from '../components/CommunityPostPage/PostList/PostList/PostList';

export default function CommunityScreen() {
    return (
        <SafeAreaView>
            <PostList />
        </SafeAreaView>
    );
}
