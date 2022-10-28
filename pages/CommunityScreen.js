import { Text, ScrollView } from 'react-native';
import AddPostBtn from '../components/AddPostBtn/AddPostBtn';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";

export default function CommunityScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>CommunityScreen</Text>
            </ScrollView>
            <AddPostBtn />
        </SafeAreaView>
    );
}
