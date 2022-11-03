import { ScrollView, View } from 'react-native';
import PostContent from './PostContent/PostContent';
import PostComment from './PostComment';
import GrayCircle from '../../assets/grayCommonCircle.png';
import PostComments from './PostComment/PostComments';

export default function PostDetailScreen() {
    return (
        <View>
            <View>
                <PostContent />
            </View>
            <PostComments />
        </View>
    );
}