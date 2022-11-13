import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React, { useState } from 'react';

export default function PostChange(values){

    const [CommunityPost, SetCommunityPost] = useState("게시글");

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Buttons}>
                    <TouchableOpacity
                        key={values[0]}
                        onPress={() => SetCommunityPost(cur => cur === "게시글" ? "가티" : "게시글")}
                        style={[
                            styles.postChangeBtn,
                            CommunityPost === "게시글" ? styles.selectedBtn : null
                        ]}
                    >
                    <Text
                        style={[
                            styles.buttonText,
                            CommunityPost === "게시글" ? styles.selectedText : null
                        ]}
                    >
                        {values[0]}
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        key={values[1]}
                        onPress={() => SetCommunityPost(cur => cur === "게시글" ? "가티" : "게시글")}
                        style={[
                            styles.postChangeBtn,
                            CommunityPost === "가티" ? styles.selectedBtn : null
                        ]}
                    >
                    <Text
                        style={[
                            styles.buttonText,
                            CommunityPost === "가티" ? styles.selectedText : null
                        ]}
                    >
                        {values[1]}
                    </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    postChangeBtn: {
        paddingVertical: 8,
        marginHorizontal: 15,
        width: 157,
        height: 34,
        backgroundColor: "#FFFFFF",
        borderRadius: 27,
    },
    selectedBtn: {
        backgroundColor: "#0D76FF",
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 700,
        color: "#999999",
    },
    selectedText: {
        color: "#FFFFFF",
    }
})