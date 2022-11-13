import {Text, Image, ScrollView, View, StyleSheet } from 'react-native';

export default function UserProfile({profileImage, userName, sentTime}) {
    return (
        <View style={styles.userProfilePart}>
            <View>
                <Image
                    source={profileImage}
                    style={{ width: 39, height: 39 }}
                />
            </View>
            <View style={styles.userNamePart}>
                <Text style={styles.userNameText}>{userName}</Text>
                <Text style={styles.sentTimeText}>{sentTime}분 전</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userProfilePart: {
        flex: 1,
        flexDirection: 'row',
        padding: 7
    },

    userNamePart: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },

    userNameText: {
        fontWeight: 700,
        fontSize: 18
    },

    sentTimeText: {
        fontWeight: 500,
        fontSize: 9
    }
})