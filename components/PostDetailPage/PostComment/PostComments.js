import { StyleSheet, ScrollView, View } from 'react-native';
import GrayCircle from '../../../assets/grayCommonCircle.png';
import PostCommentList from '../PostComment/PostCommentList';

export default function PostComments() {
    return (
        <ScrollView style={styles.postCommentsPart}>
            <PostCommentList 
                ContentOfPostContent="게시글 댓글"
                userName="오만과 편견"
                sentTime={17}
                profileImage={GrayCircle}
            />
            <PostCommentList 
                ContentOfPostContent="게시글 댓글"
                userName="장발장"
                sentTime={12}
                profileImage={GrayCircle}
            />
            <PostCommentList 
                ContentOfPostContent="게시글 댓글"
                userName="러브하우스"
                sentTime={8}
                profileImage={GrayCircle}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    postCommentsPart: {
        backgroundColor: '#F2F2F2',
        flex: 1
    }
})