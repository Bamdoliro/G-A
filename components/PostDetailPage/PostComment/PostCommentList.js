import {Text, View, StyleSheet } from 'react-native';
import UserProfile from './PostContent/UserProfile';

export default function PostCommentList(ContentOfPostContent, userName, sentTime, profileImage) {
    return (
        <View>
            <UserProfile
                profileImage={profileImage}
                userName={userName}
                sentTime={sentTime}
            />
            <Text style={styles.postComment}>{ContentOfPostContent}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    postComment: {
        
    }
})