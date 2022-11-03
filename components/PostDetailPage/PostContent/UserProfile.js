import {Text, Image, ScrollView, View, StyleSheet } from 'react-native';

export default function UserProfile({profileImage, userName, sentTime}) {
    return (
        <View>
            <View>
                <Image
                    source={profileImage}
                    style={{ width: 39, height: 39 }}
                />
            </View>
            <Text>{userName}</Text>
            <Text>{sentTime}분 전</Text>
        </View>
    );
}