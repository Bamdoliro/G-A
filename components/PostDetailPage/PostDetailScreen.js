import { ScrollView, View } from 'react-native';
import PostContent from './PostContent/PostContent';
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