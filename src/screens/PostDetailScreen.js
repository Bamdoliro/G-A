import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import PostDetail from "../components/Post/detail/PostDetail";
import PostDetailHeader from "../components/Post/detail/PostDetailHeader";

const PostDetailScreen = ({navigation}) => {

    return (
        <SafeAreaView>
            <PostDetailHeader
                navigation={navigation}
            />
            <PostDetail/>
        </SafeAreaView>
    )
}

export default PostDetailScreen;
