import {StyleSheet, ScrollView} from 'react-native';
import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import DetailHeader from '../components/Feed/detail/DetailHeader';
import PostDetail from '../components/Feed/detail/PostDetail';
import SendField from '../components/common/input/SendField/SendField';
import Seokkamoni from "../assets/seokkamoni.png"
import FeedImg from "../assets/feedImage.png"
import sendImg from "../assets/comment_send_field.png"
import {useQuery} from "react-query";
import {getFeedDetail} from "../utils/api/feed";
import PostDetailComment from "../components/Feed/detail/PostDetailComment";

const PostDetailScreen = ({route, navigation}) => {
    const {id} = route.params;
    const {data} = useQuery('getFeedDetail', () => getFeedDetail(id), {
        onSuccess: () => {
        }
    })

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.contents}>
                <DetailHeader
                    data={data}
                />
                <PostDetail
                    data={data}
                />
                <PostDetailComment
                    data={data?.comments}
                />
            </ScrollView>
            <SendField
                sendImg={sendImg}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {},
    contents: {
        backgroundColor: "#f4f4f4"
    }
})

export default PostDetailScreen;
