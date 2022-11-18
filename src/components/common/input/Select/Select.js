import {Text, TouchableOpacity, StyleSheet, View} from "react-native";

export default function Select({text, selected, onPress}) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            {selected &&
                <View style={styles.blueCircle}/>
            }
            <Text style={[styles.text, selected && styles.text.selected]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },
    blueCircle: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        backgroundColor: "#0D76FF",
        marginRight: 5,
    },
    text: {
        fontSize: 15,
        color: "#818181",
        selected: {
            color: "#000",
            fontWeight: "500",
        }
    },
})
