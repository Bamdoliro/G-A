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
            {/* 사진 */}
            <View style={styles.UploadImgContent}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GatiProduceContainer: {
        flex: 1,
        alignItems: "center"
    },
    GatiProduceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        width: 300
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
    UploadImgContent: {

    }
})