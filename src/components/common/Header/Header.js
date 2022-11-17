import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ArrowIcon from "../../../assets/arrow.png";
import {useNavigation} from "@react-navigation/native";

export default function Header({title, buttonText, buttonOnPress}) {
    const navigation = useNavigation()

    return (
        <View style={styles.GatiProduceHeader}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image
                    source={ArrowIcon}
                    style={styles.ArrowIcon}
                />
            </TouchableOpacity>
            <Text style={styles.GatiTitleText}>
                {title}
            </Text>
            <TouchableOpacity
                onPress={buttonOnPress}
            >
                <Text style={styles.CompletionText}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    GatiProduceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },

    ArrowIcon: {
        width: 10,
        height: 20,
    },
    GatiTitleText: {
        fontSize: 19,
        fontWeight: "bold",
    },
    CompletionText: {
        fontSize: 15,
        color: "#0D76FF"
    },

    PostWritingText: {
        fontSize: 15,
        color: '#999999'
    }
})
