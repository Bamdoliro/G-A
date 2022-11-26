import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import LightHeader from "../components/common/header/LightHeader/LightHeader";
import ProfileEditSection from "../components/Profile/edit/ProfileEditSection";

export default function ProfileEditScreen({setLogout}) {

    return (
        <SafeAreaView style={styles.root}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <LightHeader
                    title="프로필 수정"
                    buttonText="완료"
                    buttonOnPress={() => {}}
                    style={styles.header}
                    allowBack={true}
                />
                <ProfileEditSection/>
            </KeyboardAvoidingView>
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
