import {Image, KeyboardAvoidingView, StyleSheet, Platform} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileInfo from '../components/Profile/ProfileInfo';
import ProfileSection from '../components/Profile/ProfileSection';

export default function ProfileEditScreen({setLogout}) {
    
    return (
        <SafeAreaView style={styles.root}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ProfileHeader isEditing />
                <ProfileInfo isEditing />
                <ProfileSection setLogout={setLogout} isEditing />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
