import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function OptionBtn({Title, SubTitle, Focus, setPublic, Option}) {
    const PublicOnClick = () => {
        setPublic(true)
    }

    const PrivateOnClick = () => {
        setPublic(false)
    }

    return (
        <TouchableOpacity 
            style={[{backgroundColor: Focus ? "#0D76FF" : "#C4C4C4" }, styles.OptionBtn]}
            onPress={Option == "public" ? PublicOnClick : PrivateOnClick}
        >
            <View style={styles.TitleTextFrame}>
                <Text style={styles.OptionBtnTitleText}>
                    {Title}
                </Text>
            </View>
            <View style={styles.SubTextFrame}>
                <Text 
                    style={styles.OptionBtnSubText}
                    numberOfLines={2}
                >
                    {SubTitle}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    OptionBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 10
    },
    TitleTextFrame: {
        width: 70,
    },
    OptionBtnTitleText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        marginRight: 20,
    },
    SubTextFrame: {
        width: 200,
        textAlign: "left"
    },
    OptionBtnSubText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 13,
        width: 200,
    }
})