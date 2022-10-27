import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Menu, MenuItem } from 'react-native-material-menu';
import React, { useState } from "react";
import PostImg from "../../../assets/post_img.png"
import OptionImg from "../../../assets/option.png"
import HumanIcon from "../../../assets/human_info.png"
import CalendarIcon from "../../../assets/calendar.png"
import CustomButton from "../../../components/common/CustomButton/CustomButton";

export default function GatiPostList({ Title }) {

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    return (
        <TouchableOpacity style={styles.PostList}>
            <Image
                style={styles.PostImg}
                source={PostImg}
            />
            <View style={styles.PostContentArea}>
                <Text style={styles.TitleText} numberOfLines={2} ellipsizeMode="tail">{Title}</Text>
                <View style={styles.PostInfo}>
                    <View style={styles.HumanArea}>
                        <Image
                            source={HumanIcon}
                            style={styles.HumanIcon}
                        />
                        <Text style={styles.HumanOfNumber}>10</Text>
                    </View>
                    <View style={styles.CalendarArea}>
                        <Image
                            source={CalendarIcon}
                            style={styles.CalendarIcon}
                        />
                        <Text style={styles.CalendarOfDate}>05/23 ~ 06/23</Text>
                    </View>
                </View>
                <View style={styles.PostSideBar}>
                    <View style={styles.GatiEnterBtnArea}>
                        <CustomButton
                            title="참여하기"
                        />
                    </View>
                    <View style={styles.Option}>
                        <Menu
                            style={styles.OptionMenu}
                            visible={visible}
                            anchor={
                                <TouchableOpacity onPress={showMenu}>
                                    <Image source={OptionImg} style={styles.OptionImg} />
                                </TouchableOpacity>
                            }
                            onRequestClose={hideMenu}
                        >
                            <MenuItem onPress={hideMenu} textStyle={{ textAlign: "center", fontSize: 16 }} pressColor="#fff">수정</MenuItem>
                            <MenuItem onPress={hideMenu} textStyle={{ textAlign: "center", fontSize: 16 }} pressColor="#fff">삭제</MenuItem>
                        </Menu>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    PostList: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#E2E2E2",
        backgroundColor: "#fff",
        width: 360,
        height: 150,
        borderRadius: 12,
        marginBottom: 15,
    },
    PostImg: {
        width: 120,
        height: 150,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    PostContentArea: {
        marginLeft: 10,
        width: 220,
        paddingBottom: 10,
        paddingTop: 10
    },
    TitleText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    PostInfo: {
        flexDirection: "row",
        marginTop: 10
    },
    HumanArea: {
        flexDirection: "row",
        alignItems: "center",
    },
    HumanOfNumber: {
        color: "#0D76FF",
        fontWeight: "bold",
        paddingLeft: 5
    },
    HumanIcon: {
        width: 25,
        height: 25
    },
    CalendarArea: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    },
    CalendarOfDate: {
        color: "#0D76FF",
        fontWeight: "bold",
        paddingLeft: 5
    },
    CalendarIcon: {
        width: 25,
        height: 25
    },
    PostSideBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        top: 20
    },
    GatiEnterBtnArea: {
        flexDirection: "row",
        width: 135,
        height: 25
    },
    OptionMenu: {
        borderRadius: 16,
    },
    OptionImg: {
        width: 25,
        height: 25
    },
})