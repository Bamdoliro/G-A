import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import ArrowIcon from "../assets/arrow.png"

export default function GatiProducePage() {
    return (
        <View style={styles.GatiProduceContainer}>
            {/* Header 부분 */}
            <View style={styles.GatiProduceHeader}>
                <TouchableOpacity>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.GatiTitleText}>
                    공동체 생성
                </Text>
                <TouchableOpacity>
                    <Text style={styles.CompletionText}>
                        완료
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GatiProduceContainer: {
        flex: 1,
    },
    GatiProduceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        paddingLeft: 35,
        paddingRight: 35,
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
    }
})