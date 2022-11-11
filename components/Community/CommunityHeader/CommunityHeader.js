import { StyleSheet, TextInput, Image, View, Text } from 'react-native';
import NotificationBar from '../CommunityHeader/NotificationBar';
import pencilIcon from '../../../assets/Pencil_Icon.png';
import BellIcon from "../../../assets/Bell_Icon.png"
import ToggleIcon from "../../../assets/main_toggle.png"

export default function CommunityHeader(){
    return (
        <View style={styles.CommunityHeader}>
            <View style={styles.HeaderContent}>
                <Image 
                    source={ToggleIcon}
                    style={{width: 25, height: 25}}
                />
                <Image
                    source={BellIcon}
                    style={{width: 25, height: 25}}
                />
            </View>
            <View style={styles.CommunityDetailFrame}>
                <Image
                    source={pencilIcon}
                    style={styles.pencilIcon}
                />
                <TextInput
                    style={styles.CommunityDetail}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    CommunityHeader: {
        flexDirection: "column",
        height: 125,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        marginBottom: 48,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18
    },

    CommunityDetailFrame: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        height: 35,
        borderRadius: 26,
        padding: 8,
        backgroundColor: "#F2F2F2",
        marginTop: 20
    },
    CommunityDetail: {
        color: "000000",
        backgroundColor: "F2F2F2",
        width: "80%",
        height: 46,
        textAlign: "left",
    },
    pencilIcon: {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: 10,
        height: 10,
        margin: 10
    },
    // Header Content
    HeaderContent: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between"
    }
})