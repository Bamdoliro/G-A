import {StyleSheet} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import LightHeader from "../components/common/header/LightHeader/LightHeader";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileSection from "../components/Profile/ProfileSection";

export default function ProfileScreen({setLogout}) {

    return (
        <SafeAreaView style={styles.root}>
            <LightHeader
                title="프로필"
                buttonOnPress={() => {}}
                style={styles.header}
                allowBack={false}
            />
            <ProfileInfo/>
            <ProfileSection
                setLogout={setLogout}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 30,
    },
})
