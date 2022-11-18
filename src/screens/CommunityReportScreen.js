import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView, Image } from 'react-native';
import ArrowIcon from '../assets/arrow.png';
import GatiIntroduction from '../components/common/GatiIntroduction/GatiIntroduction';

export default function CommunityReportScreen() { // '공동체_신고하기' 페이지
    return (
        <View style={styles.GatiProduceContainer}>
            <Header
                title="신고"
                buttonText="완료"
                buttonOnPress={() => {
                    // 버튼 눌렀을 때 이벤트 추가하기 
                }}
            />
            <View>
                <Text style={styles.ReportReasonText}>신고 사유</Text>
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
    }
})
