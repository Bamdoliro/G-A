import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Arrow from "../../../assets/arrow.png";
import MenuBtn from "../../../assets/menu_btn.png";

// 시간 날때 클래스 명 좀 고칠께요 개발 빨리 하려다 보니 야매로 지었습니다..
// 이미지는 SVG 가 따로 안넣어져서 아직 안넣음

export default function ChatLiveHeader({ name, numberOfMembers, navigation }) {
    const BeforeScreen = (navigation) => {
        navigation.pop();
    }

    return (
        <View style={styles.ChatLiveHeader}>
            <View style={styles.LiveHeader}>
                <View style={styles.HeaderContent}>
                    <View style={styles.HeaderSetText}>
                        {/* Arrow SVG 부분 */}
                        <TouchableOpacity onPress={() => BeforeScreen(navigation)}>
                            <Image
                                source={Arrow}
                                style={styles.ArrowImg}
                            />
                        </TouchableOpacity>
                        <Text style={styles.ChatTitle}>
                            {name}
                        </Text>
                        <Text style={styles.NumberOfParticipants}>{numberOfMembers}</Text>
                    </View>
                    <View style={styles.MenuBtn}>
                        {/* MenuBtn 부분 */}
                        <Image
                            source={MenuBtn}
                            style={styles.MenuBtn}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveHeader: {
        height: 100,
        backgroundColor: "#D4E0FF",
    },
    LiveHeader: {
        backgroundColor: "#fff",
        height: 100,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center"
    },
    HeaderContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        width: 300
    },
    HeaderSetText: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    ArrowImg: {
        width: 10,
        height: 20,
        marginRight: 15
    },
    ChatTitle: {
        fontSize: 19,
        fontWeight: "bold",
    },
    NumberOfParticipants: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#777777",
        marginLeft: 5
    },
    MenuBtn: {
        width: 20,
        height: 23,
    }
})
