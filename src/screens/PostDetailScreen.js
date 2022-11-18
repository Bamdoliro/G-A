import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import PostDetail from "../components/Feed/detail/PostDetail";
import PostDetailHeader from "../components/Feed/detail/PostDetailHeader";

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
