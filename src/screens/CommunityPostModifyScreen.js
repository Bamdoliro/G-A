import {StyleSheet, Text, View} from 'react-native';
import TextArea from '../components/common/input/TextArea/TextArea';
import LightHeader from "../components/common/header/LightHeader/LightHeader";

export default function CommunityPostModifyScreen() { // '채팅2_공지수정' 페이지
    return (
        <View style={styles.GatiProduceContainer}>
            <LightHeader
                title="공지 수정"
                buttonText="완료"
                buttonOnPress={() => {
                    // 버튼 눌렀을 때 이벤트 추가하기
                }}
            />
            <View>
                <Text style={styles.PostWritingText}>글 쓰기</Text>
            </View>
            <TextArea/>
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
