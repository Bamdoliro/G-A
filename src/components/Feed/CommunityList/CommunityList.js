import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import coverImage from "../../../assets/feedImage.png";
import { useNavigation } from "@react-navigation/native";

export default function CommunityList({title, content, numberOfPeople}) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('PostDetailScreen')}
        >
            <Image
                style={styles.coverImage}
                source={coverImage}
                resizeMethod="scale"
            />
            <View style={styles.informationArea}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.numberOfPeople.blueCircle} />
                        <Text style={styles.numberOfPeople.text}>
                            {numberOfPeople}명
                        </Text>
                    </View>
                </View>
                <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail">
                    {content}
                </Text>
            </View>
        </TouchableOpacity>
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
        fontSize: 14,
        fontWeight: "bold",
        marginRight: 5,
        maxWidth: "75%"
    },
    content: {
        color: "#858585",
        fontSize: 11,
        marginTop: 5,
    },
    numberOfPeople: {
        flexDirection: "row",
        alignItems: "center",
        blueCircle: {
            borderRadius: "50%",
            backgroundColor: "#0D76FF",
            width: 4,
            height: 4,
            marginRight: 3,
        },
        text: {
            color: "#0D76FF",
            fontSize: 12,
        }
    },
})
