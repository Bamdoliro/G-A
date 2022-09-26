import { View, StyleSheet, Text, Image } from "react-native";
import Arrow from "../../assets/arrow.png";
import MenuBtn from "../../assets/menu_btn.png";

// 시간 날때 클래스 명 좀 고칠께요 개발 빨리 하려다 보니 야매로 지었습니다..
// 이미지는 SVG 가 따로 안넣어져서 아직 안넣음    

export default function ChatLiveHeader() {
    return (
        <View style={styles.LiveHeader}>
            <View style={styles.HeaderContent}>
                <View style={styles.HeaderSetText}>
                    {/* Arrow SVG 부분 */}
                    <Image 
                        source={Arrow}
                        style={styles.ArrowImg}
                    />
                    <Text style={styles.ChatTitle}>
                        자이 강아지 산책 모임   
                    </Text>
                    <Text style={styles.NumberOfParticipants}>14</Text>
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
    )
}

const styles = StyleSheet.create({
    LiveHeader: {
        backgroundColor: "#fff",
        height: "13%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    HeaderContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 35,
        paddingRight: 35,
        marginTop: 60
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
        fontSize: 15,
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