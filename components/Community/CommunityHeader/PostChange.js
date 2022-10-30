import { StyleSheet, TouchableOpacity, View, Text, useState } from 'react-native';

export default function PostChange(){
    values,
    selectedValue={CommunityPost},
    setSelectedValue={SetCommunityPost}

    const [CommunityPost, SetCommunityPost] = useState("게시글");

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Buttons}>
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