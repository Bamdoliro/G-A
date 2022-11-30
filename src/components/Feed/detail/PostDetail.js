import {StyleSheet, Text, View} from "react-native";

export default function PostDetail({data}) {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {
                    // <Image
                    //     source={img}
                    //     style={styles.img}
                    // />
                }
                <Text style={styles.title}>{data?.title}</Text>
                <Text style={styles.explanation}>
                    {data?.content}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: "#fff"
    },
    main: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 10,
    },
    img: {
        width: "100%",
        borderRadius: 4,
        height: 220,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#00000",
        marginBottom: 4
    },
    explanation: {
        fontSize: 15,
        color: "#636363"
    }
})
