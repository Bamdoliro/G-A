import { StyleSheet, TouchableOpacity, View, Text, useState } from 'react-native';

export default function PostChange(){
    label,
    values,
    selectedValue={CommunityPost},
    setSelectedValue={SetCommunityPost}

    const [CommunityPost, SetCommunityPost] = useState("게시글");

    return (
        <View>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.postChangeBtn,
                        selectedValue === value && styles.selectedBtn,
                    ]}
                >
                <Text
                    style={[
                        styles.buttonText,
                        selectedValue === value && styles.selectedText,
                    ]}
                >
                    {value}
                </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    postChangeBtn: {
        paddingVertical: 8,
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