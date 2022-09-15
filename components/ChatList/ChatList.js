import { View, StyleSheet, Image, Text } from "react-native";

export default function ChatList({MAIN_TEXT, SUB_TEXT, PARTICIPANT, DATE}) {
    return (
        <View style={styles.ChatListContent}>
            <View style={styles.ProfileAndTitle}>
                <Image
                    style={styles.ChatProfileImg}
                    source={require('../../assets/profile.jpg')}
                />
                <View style={styles.ChatSetText}>
                    <View style={styles.ChatSetMainText}>
                        <Text style={styles.ChatMainText}>
                            {MAIN_TEXT}
                        </Text>
                        <Text style={styles.NumberOfParticipants}>
                            {PARTICIPANT}
                        </Text>
                    </View>
                    <Text style={styles.ChatSubText}>
                        {SUB_TEXT}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.ChatDate}>
                    {DATE}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatListContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    ProfileAndTitle: {
        flexDirection: "row",
        alignItems: "center"
    },
    ChatProfileImg: {
        width: "40px",
        height: "40px",
        borderRadius: 7,
    },
    ChatSetText: {
        marginLeft: 12
    },
    ChatSetMainText: {
        flexDirection: "row",
        alignItems: "center"
    },
    ChatMainText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 5
    },
    NumberOfParticipants: {
        color: "#B1B1B1",
        fontSize: 12,
        fontWeight: 500
    },
    ChatSubText: {
        color: "#B1B1B1",
        fontSize: 12,
        fontWeight: 500
    },
    ChatDate: {
        color: "#B1B1B1",
        fontSize: 12,
        fontWeight: 500,
    }
})