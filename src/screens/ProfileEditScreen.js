import {StyleSheet} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import LightHeader from "../components/common/header/LightHeader/LightHeader";
import ProfileEditSection from "../components/Profile/edit/ProfileEditSection";

export default function ProfileEditScreen() {

    return (
        <SafeAreaView style={styles.root}>
            <LightHeader
                title="프로필 수정"
                buttonText="완료"
                buttonOnPress={() => {
                }}
                style={styles.header}
                allowBack={true}
            />
            <ProfileEditSection/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 30,
    }
})
