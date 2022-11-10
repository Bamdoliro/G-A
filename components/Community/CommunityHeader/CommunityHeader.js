import { StyleSheet, TextInput, Image, View, Text } from 'react-native';
import MenuBar from '../CommunityHeader/MenuBar';
import NotificationBar from '../CommunityHeader/NotificationBar';
import pencilIcon from '../../../assets/Pencil_Icon.png';
import arrowDownIcon from '../../../assets/Arrow_Down_Icon.png';

export default function CommunityHeader({joinMembers}){
    return (
        <View style={styles.CommunityHeader}>
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
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: 232,
        backgroundColor: "#FFFFFF",
        marginBottom: 48,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1
    },

    CommunityDetailFrame: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        height: 46,
        borderRadius: 7,
        backgroundColor: "#F2F2F2",
        marginTop: 27,
        padding: 10
    },
    CommunityDetail: {
        color: "000000",
        backgroundColor: "F2F2F2",
        width: "100%",
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
})