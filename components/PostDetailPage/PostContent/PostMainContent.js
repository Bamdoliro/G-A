import {Text, Image, ScrollView, View, StyleSheet } from 'react-native';

export default function PostMainContent({postTitle, contentOfPost, postImage}) {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ fontWeight: 700, fontSize: 15 }}>{postTitle}</Text>
            <Image source={postImage} />
            <Text 
                style={{ fontSize: 12 }}
                numberOfLines={3}
            >
                {contentOfPost}
            </Text>
        </View>
    );
}