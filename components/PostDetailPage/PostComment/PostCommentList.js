import {Text, View, StyleSheet } from 'react-native';
import UserProfile from '../PostContent/UserProfile';

export default function PostCommentList({ContentOfPostContent, userName, sentTime, profileImage}) {
    return (
        <View style={{ marginTop: 7 }}>
            <UserProfile
                style={styles.commentUserProfile}
                profileImage={profileImage}
                userName={userName}
                sentTime={sentTime}
            />
            <Text 
                style={styles.postComment}
                numberOfLines={3}
            >
                {ContentOfPostContent}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    commentUserProfile: {
        marginLeft: 26,
        marginTop: 20,
        marginBottom: 4
     },

    postComment: {
        backgroundColor: '#D9D9D9',
        borderRadius: 27,
        width: 346,
        height: 57
    }
})