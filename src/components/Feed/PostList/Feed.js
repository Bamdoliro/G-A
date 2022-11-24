import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import coverImage from "../../../assets/feedImage.png";
import {useNavigation} from "@react-navigation/native";

export default function Feed({Title, content}) {
    const navigation = useNavigation();

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
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{Title}</Text>
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
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        color: "#858585",
        fontSize: 13,
        marginTop: 5,
    },
})
