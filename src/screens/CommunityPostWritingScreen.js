import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView, Image } from 'react-native';
import ArrowIcon from '../assets/arrow.png';
import TextArea from '../components/common/input/TextArea/TextArea';
import Header from '../components/common/Header/Header';

export default function CommunityReportScreen() { // '채팅_공지작성' 페이지
    return (
        <View style={styles.GatiProduceContainer}>
            <Header
                title="공지 작성"
                buttonText="완료"
                buttonOnPress={() => {
                    // 버튼 눌렀을 때 이벤트 추가하기 
                }}
            />
            <View>
                <Text style={styles.PostWritingText}>글 쓰기</Text>
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
