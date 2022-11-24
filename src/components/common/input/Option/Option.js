import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function Option({title, description, focus, isPublic, setIsPublic, style}) {

    return (
        <TouchableOpacity
            style={[{backgroundColor: focus ? "#0D76FF" : "#C4C4C4"}, styles.container, style]}
            onPress={() => !focus && setIsPublic(!isPublic)}
        >
            <Text style={styles.title}>
                {title}
            </Text>
            <Text
                style={styles.description}
            >
                {description}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        width: "100%",
    },
    title: {
        color: "#fff",
        width: "20%",
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        width: "80%",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 13,
    }
})
