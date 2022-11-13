import { ScrollView, View } from 'react-native';
import PostContent from './PostContent/PostContent';
import PostComments from './PostComment/PostComments';

export default function PostDetailScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <PostContent />
            <PostComments />
        </View>
    );
}