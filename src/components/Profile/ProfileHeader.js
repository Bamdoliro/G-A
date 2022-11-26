import { StyleSheet } from 'react-native';
import LightHeader from "../common/header/LightHeader/LightHeader";

export default function ProfileHeader({ setLogout, allowBack, isEditing }) {
    return (
        <LightHeader
            title={isEditing ? "프로필 편집" : "프로필"}
            buttonText={isEditing && "저장"}
            buttonOnPress={() => {}}
            style={styles.header}
            allowBack={!!isEditing}
        />
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 30,
        paddingTop: 30,
    }
})
