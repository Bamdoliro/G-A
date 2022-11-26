import {StyleSheet, Text, View} from 'react-native';
import TextArea from "../components/common/input/TextArea/TextArea";
import LightHeader from "../components/common/header/LightHeader/LightHeader";

export default function CommunityReportScreen() { // '공동체_신고하기' 페이지
    return (
        <View style={styles.GatiProduceContainer}>
            <LightHeader
                title="신고"
                buttonText="완료"
                buttonOnPress={() => {
                    // 버튼 눌렀을 때 이벤트 추가하기
                }}
            />
            <View>
                <Text style={styles.ReportReasonText}>신고 사유</Text>
            </View>
            <TextArea />
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
