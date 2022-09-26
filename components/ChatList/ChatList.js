import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function ChatList({ IMG, MAIN_TEXT, SUB_TEXT, PARTICIPANT, DATE, navigation }) {

    const ChatListOnClick = (navigation) => {
        // 백엔드 들어오면 수정하겠음
        navigation.navigate('ChatLiveScreen');
    }

    return (
        <TouchableOpacity 
            style={styles.TouchScreen} 
            onPressOut={() => ChatListOnClick(navigation)}
        >
            <View style={styles.ChatListContent}>                
                <View style={styles.ProfileAndTitle}>
                    <Image
                        style={styles.ChatProfileImg}
                        source={{ uri: IMG }}
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
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    TouchScreen: {
        marginBottom: 10
    },
    ChatListContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16
    },
    ProfileAndTitle: {
        flexDirection: "row",
        alignItems: "center"
    },
    ChatProfileImg: {
        width: 40,
        height: 40,
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