import { View, StyleSheet, Image, Text } from "react-native";

export default function PostDetailCommentItem({img, user, comment, betime}) {
    return (
        <View style={styles.container}>
            <Image
                source={img}
                style={styles.profile}
            />
            <View style={{paddingLeft: 5}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.name}>{user}</Text>
                    <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 5}}>
                        <View style={styles.dot} />
                        <Text style={styles.betime}>{betime}분 전</Text>
                    </View>
                </View>
                <Text style={styles.comment}>{comment}</Text>     
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25
    },
    profile: {
        width: 29,
        height: 29
    },
    name: {
        fontSize: 13,
        fontWeight: "500",
    },
    betime: {
        color: "#B0B0B0",
        fontSize: 10,
        paddingLeft: 2
    },
    dot: {
        width: 3,
        height: 3,
        backgroundColor: "#B0B0B0", 
        borderRadius: "50%",
    },
    comment: {
        color: "#636363",
        fontSize: 13,
        fontWeight: "300"
    }
})