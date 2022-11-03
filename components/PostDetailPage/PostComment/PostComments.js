import { ScrollView, View } from 'react-native';
import GrayCircle from '../../assets/grayCommonCircle.png';
import PostCommentList from './PostCommentList';

export default function PostComments() {
    return (
        <ScrollView>
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