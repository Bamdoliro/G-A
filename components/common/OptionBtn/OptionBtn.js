import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function OptionBtn({Title, SubTitle}) {
    return (
        <TouchableOpacity style={styles.OptionBtn}>
            <Text style={styles.OptionBtnTitleText}>
                {Title}
            </Text>
            <Text style={styles.OptionBtnSubText}>
                {SubTitle}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    OptionBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        backgroundColor: "#0D76FF",
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 10
    },
    OptionBtnTitleText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    OptionBtnSubText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 13
    }
})