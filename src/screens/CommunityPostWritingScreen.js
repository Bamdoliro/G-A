import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView, Image } from 'react-native';
import ArrowIcon from '../assets/arrow.png';
import GatiIntroduction from '../components/common/GatiIntroduction/GatiIntroduction';

export default function CommunityReportScreen() { // '채팅_공지작성' 페이지
    return (
        <View style={styles.GatiProduceContainer}>
            <View style={styles.GatiProduceHeader}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.GatiTitleText}>
                    공지 작성
                </Text>
                <TouchableOpacity>
                    <Text style={styles.CompletionText}>
                        완료
                    </Text>
                </TouchableOpacity>
            </View>
            <GatiIntroduction />
        </View>
    )
}

const styles = StyleSheet.create({
    GatiProduceContainer: {
        flexGrow: 1,
        backgroundColor: "#fff",
        alignItems: 'center'
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
    }
})
