import {View, StyleSheet, Text, Image} from "react-native";
import ProfileImage from "../../../../assets/basicProfileImage.png";

export default function ChatLiveOtherMessage({data}) {
    return (
        <View style={styles.container}>
            <Image source={ProfileImage} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.name}>{data.username}</Text>
                <View style={styles.block}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{data.message}</Text>
                    </View>
                    <Text style={styles.time}>{data.sentAt.substring(11)}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "flex-start",
        marginVertical: 7,
    },
    content: {
        alignItems: "flex-start",
        marginLeft: 5,
    },
    name: {
        fontSize: 13,
        marginBottom: 4,
    },
    block: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    time: {
        fontSize: 12,
        color: "#737373",
        marginLeft: 5,
    },
    textContainer: {
        alignItems: "center",
        backgroundColor: "#0D76FF",
        padding: 11,
        borderRadius: 20,
        maxWidth: "80%",
    },
    text: {
        color: "#fff",
        fontSize: 15,
    },
    image: {
        width: 50,
        height: 50,
    }
})
