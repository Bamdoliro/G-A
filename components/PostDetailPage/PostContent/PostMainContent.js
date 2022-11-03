import {Text, Image, ScrollView, View, StyleSheet } from 'react-native';

export default function PostMainContent({postTitle, contentOfPost, postImage}) {
    return (
        <View>
            <Text>{postTitle}</Text>
            <View>
                <Image source={postImage} />
            </View>
            <Text numberOfLines={4}>
                {contentOfPost}
            </Text>
        </View>
    );
}
