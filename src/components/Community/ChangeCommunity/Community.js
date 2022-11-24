import {Image, StyleSheet, Text, View} from "react-native";

export default function Community({id, name, coverImage, current}) {
    return (
        <View style={[styles.container, current ? styles.current : null]}>
            <Image source={{uri: coverImage}} style={styles.image}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    current: {
      backgroundColor: "#ECECEC"
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 6,
    },
    name: {
        fontSize: 18,
    }
})
