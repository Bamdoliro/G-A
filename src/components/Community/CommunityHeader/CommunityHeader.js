import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import pencilIcon from '../../../assets/Pencil_Icon.png';
import BellIcon from "../../../assets/Bell_Icon.png"
import ToggleIcon from "../../../assets/main_toggle.png"

import ChoiceButton from '../../common/ChoiceBtn/ChoiceButton';
import {useNavigation} from "@react-navigation/native";

export default function CommunityHeader({isChoiceBtn, setChoiceBtn}) {
    const navigation = useNavigation();

    return (
        <View style={{alignItems: "center"}}>
            <View style={styles.CommunityHeader}>
                <View style={styles.HeaderContent}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CommunitySettingScreen')}
                    >
                        <Image
                            source={ToggleIcon}
                            style={{width: 25, height: 25}}
                        />
                    </TouchableOpacity>
                    <View style={styles.CommunityInfo}>
                        <View style={{flexDirection: "column", alignItems: "center"}}>
                            <Text style={styles.CommunityTitle}>
                                부산 소프트웨어 마이스터고
                            </Text>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{color: "#0D76FF"}}>
                                    125
                                </Text>
                                <Text>
                                    명이 참여 중 입니다!
                                </Text>
                            </View>
                        </View>
                    </View>
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
                </View>
            </View>
            <View style={styles.CommunityChoiceArea}>
                <ChoiceButton
                    title="게시물"
                    isChoiceBtn={!isChoiceBtn}
                    setChoiceBtn={setChoiceBtn}
                />
                <ChoiceButton
                    title="가티"
                    isChoiceBtn={isChoiceBtn}
                    setChoiceBtn={setChoiceBtn}
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
        backgroundColor: "#FFFFFF",
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
    },

    CommunityDetailFrame: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        height: 35,
        padding: 8,
        backgroundColor: "#F2F2F2",
        borderRadius: 8,
        marginTop: 10
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
        height: 50,
        alignItems: "center",
        justifyContent: "space-between"
    },
    CommunityTitle: {
        fontSize: 17,
        fontWeight: "bold"
    },
    // CommunityChoiceArea
    CommunityChoiceArea: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
})
