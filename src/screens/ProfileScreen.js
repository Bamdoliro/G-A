import { useEffect } from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileInfo from '../components/Profile/ProfileInfo';
import ProfileSection from '../components/Profile/ProfileSection';

export default function ProfileScreen({setLogout}) {
    return (
        <SafeAreaView style={styles.root}>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileSection setLogout={setLogout} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        flex: 1
    }
})
