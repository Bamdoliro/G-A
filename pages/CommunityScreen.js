import { Text, ScrollView } from 'react-native';
import AddPostBtn from '../components/common/AddPostBtn/AddPostBtn';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";

export default function CommunityScreen() {
    const ClickAddPostBtn = () => {
        alert("게시물 추가 버튼 클릭")
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>CommunityScreen</Text>
            </ScrollView>
            <AddPostBtn onPress={ClickAddPostBtn} />
        </SafeAreaView>
    );
}
