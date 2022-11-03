import { Text, ScrollView } from 'react-native';
import AddPostBtn from '../components/common/AddPostBtn/AddPostBtn';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";

export default function CommunityScreen({ navigation }) {
    const ClickAddPostBtn = () => {
        navigation.navigate('GatiProducePage')
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>CommunityScreen</Text>
            </ScrollView>
            <AddPostBtn
                onPress={ClickAddPostBtn}
                navigation={navigation}
            />
        </SafeAreaView>
    );
}
