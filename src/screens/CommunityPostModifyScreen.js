import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView, Image } from 'react-native';
import ArrowIcon from '../assets/arrow.png';
import GatiIntroduction from '../components/common/GatiIntroduction/GatiIntroduction';

export default function CommunityPostModifyScreen() { // '채팅2_공지수정' 페이지
    return (
        <View style={styles.GatiProduceContainer}>
            <Header
                title="공지 수정"
                buttonText="완료"
                buttonOnPress={() => {
                    // 버튼 눌렀을 때 이벤트 추가하기 
                }}
            />
            <View>
                <Text style={styles.PostWritingText}>글 쓰기</Text>
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
