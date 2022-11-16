import ArrowIcon from "../../../assets/arrow.png"
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function GatiHeader({HeaderTitle, navigation}) {
    return (
        <View style={styles.GatiProduceHeader}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image
                    source={ArrowIcon}
                    style={styles.ArrowIcon}
                />
            </TouchableOpacity>
            <Text style={styles.GatiTitleText}>
                {HeaderTitle}
            </Text>
            <TouchableOpacity>
                <Text style={styles.CompletionText}>
                    완료
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
        width: 300,
        marginTop: 20
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
})