import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import CustomButton from "../../common/button/CustomButton/CustomButton";
import Tag from "./Tag";
import {changeToPeriod} from "../../../utils/etc/dateTimeFormatter";

export default function GatiFeed({id, capacity, title, content, startDate, endDate, socket}) {
    const navigation = useNavigation();

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('GatiPostDetailScreen', {
                    id: id
                })}
            >
                {
                    // <Image
                    //     style={styles.coverImage}
                    //     source={{uri: coverImage}}
                    //     resizeMethod="scale"
                    // />
                }
                <View style={styles.informationArea}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                    <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail">
                        {content}
                    </Text>
                    <View style={styles.tags}>
                        <Tag text={`${capacity}명`}/>
                        <Tag text={changeToPeriod(startDate, endDate)}/>
                    </View>
                    {/*<CustomButton*/}
                    {/*    title="참여하기"*/}
                    {/*    onPress={joinGati}*/}
                    {/*    style={styles.button}*/}
                    {/*/>*/}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#E2E2E2",
        backgroundColor: "#fcfcfc",
        width: "100%",
        borderRadius: 12,
        marginBottom: 15,
    },
    coverImage: {
        width: "100%",
        height: 150,
        borderRadius: 12,
    },
    informationArea: {
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        color: "#858585",
        fontSize: 13,
        marginTop: 5,
    },
    tags: {
        marginTop: 15,
        flexDirection: "row",
    },
    button: {
        borderRadius: 6,
        marginTop: 10,
    }
})
