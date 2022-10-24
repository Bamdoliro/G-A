import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import PostImg from "../../../../../assets/post_img.png"
import ChatImg from "../../../../../assets/chat.png"
import LikeImg from "../../../../../assets/heart.png"
import OptionImg from "../../../../../assets/option.png"

export default function PostList() {
    return (
        <View style={styles.PostList}>
            <Image 
                style={styles.PostImg}
                source={PostImg}
            />
            <View style={styles.PostContentArea}>
                <Text style={styles.TitleText} numberOfLines={1} ellipsizeMode="tail">세탁기 빨래 본인 것만 가져가 주세요...</Text>
                <Text style={styles.SubTitleText} numberOfLines={2} ellipsizeMode="tail">
                    요즘에 세탁물 분실 사례가 너무 많은데 
                    본인 빨래만 가져가고 본인 빨래가 아니다
                    싶으면 세탁실에 다시 돌려 놓아 주세요...
                </Text>
                <View style={styles.PostSideBar}>
                    <View style={styles.ReactionContent}>
                        <View style={styles.PostChat}>
                            <TouchableOpacity>
                                <Image 
                                    source={ChatImg}
                                    style={styles.ChatImg}
                                />
                            </TouchableOpacity>
                            <Text style={styles.ChatOfNumber}>
                                10
                            </Text>
                        </View>
                        <View style={styles.PostLike}>
                            <TouchableOpacity>
                                <Image 
                                    source={LikeImg}
                                    style={styles.LikeImg}
                                />
                            </TouchableOpacity>
                            <Text style={styles.LikeOfNumber}>
                                10
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={OptionImg}
                            style={styles.OptionImg}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PostList: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#E2E2E2",
        backgroundColor: "#fff",
        width: 360,
        height: 130,
        borderRadius: 12,
    },
    PostImg: {
        width: 120,
        height: 130,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    PostContentArea: {
        marginLeft: 10,
        width: 220,
        paddingBottom: 10,
        paddingTop: 10
    },
    TitleText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    SubTitleText: {
        fontSize: 12,
        marginTop: 10,
    },
    PostSideBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        top: 20
    },
    ReactionContent: {
        flexDirection: "row"
    },
    PostChat: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 5
    },
    ChatImg: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    ChatOfNumber: {
        color: "#999999"
    },
    PostLike: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5
    },
    LikeImg: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    OptionImg: {
        width: 25,
        height: 25
    }
})