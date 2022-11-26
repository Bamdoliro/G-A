import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProfileImage from '../../assets/profile_image.png';

export default function ProfileInfo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image source={ProfileImage} style={styles.ProfileImage}/>
                <View style={styles.UserInfo}>
                    <Text style={styles.ID}>zi존간zi태영</Text>
                    <Text style={styles.Email}>bamdoridori11@gmail.com</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProfileEditScreen')}>
                        <Text style={styles.EditProfile}>프로필 편집</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        paddingBottom: 5
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        paddingVertical: 24,
        paddingHorizontal: 40,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 10,
    },
    ProfileImage: {
        borderRadius: 99999
    },
    UserInfo: {
        marginLeft: 14
    },
    ID: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    Email: {
        color: '#929292',
        fontSize: 13,
    },
    EditProfile: {
        color: '#0D76FF',
        fontSize: 10
    }
})
