import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import PostImg from "../../../../../assets/post_img.png"
import ChatImg from "../../../../../assets/chat.png"
import LikeImg from "../../../../../assets/heart.png"
import OptionImg from "../../../../../assets/option.png"

export default function PostList({ Title, Explanation, ChatOfNumber, LikeOfNumber }) {
    return (
        <TouchableOpacity style={styles.PostList}>
            <Image
                style={styles.PostImg}
                source={PostImg}
            />
            <View style={styles.PostContentArea}>
                <Text style={styles.TitleText} numberOfLines={2} ellipsizeMode="tail">{Title}</Text>
                <Text style={styles.Explanation} numberOfLines={2} ellipsizeMode="tail">
                    {Explanation}
                </Text>
                <View style={styles.PostSideBar}>
                    <View style={styles.ReactionContent}>
                        <View style={styles.PostChat}>
                            <Image
                                source={ChatImg}
                                style={styles.ChatImg}
                            />
                            <Text style={styles.ChatOfNumber}>
                                {ChatOfNumber}
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
                                {LikeOfNumber}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.OptionArea}>

                        <TouchableOpacity style={styles.OptionBtn}>
                            <Image
                                source={OptionImg}
                                style={styles.OptionImg}
                            />
                        </TouchableOpacity>

                        

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    PostList: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#E2E2E2",
        backgroundColor: "#fff",
        width: 360,
        height: 150,
        borderRadius: 12,
        marginBottom: 15,
    },
    PostImg: {
        width: 120,
        height: 150,
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
    Explanation: {
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
    OptionBtn: {
        marginBottom: 10
    },
    OptionImg: {
        width: 25,
        height: 25
    },
})