import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import PostDetail from "../components/Feed/detail/PostDetail";
import PostDetailHeader from "../components/Feed/detail/PostDetailHeader";
import SendField from "../components/common/input/SendField/SendField";

const PostDetailScreen = ({navigation}) => {

    return (
        <SafeAreaView>
            <PostDetailHeader/>
            <PostDetail/>
            <SendField/>
        </SafeAreaView>
    )
}

export default PostDetailScreen;
