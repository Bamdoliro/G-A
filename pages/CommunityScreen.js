import {Text} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";

export default function CommunityScreen() {
    return (
        <SafeAreaView>
            <Text>CommunityScreen</Text>
            <CommunityHeader />
        </SafeAreaView>
    );
}
