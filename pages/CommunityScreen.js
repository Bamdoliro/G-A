import { Text, ScrollView } from 'react-native';
import AddPostBtn from '../components/common/AddPostBtn/AddPostBtn';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import GatiOptionScreen from './GatiOptionScreen';

export default function CommunityScreen({ navigation }) {
    const ClickAddPostBtn = () => {
        navigation.navigate('GatiProduceScreen')
    }

    return (
        <SafeAreaView>
            {/* <GatiOptionScreen /> */}
            <AddPostBtn
                onPress={ClickAddPostBtn}
                navigation={navigation}
            />
        </SafeAreaView>
    );
}
