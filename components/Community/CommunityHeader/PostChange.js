import { StyleSheet, TouchableOpacity, View, Text, useState } from 'react-native';

export default function PostChange(){
    // values,
    // selectedValue={CommunityPost},
    // setSelectedValue={SetCommunityPost}

    const [CommunityPost, SetCommunityPost] = useState("게시글");

    SetCommunityPost(() => {
        CommunityPost = "게시글";
    });

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Buttons}>
                    <TouchableOpacity // 게시글 버튼
                        key={value}
                        onPress={() => SetCommunityPost()}
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
                        {value}
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity // 가티 버튼
                        key={value}
                        onPress={() => SetCommunityPost(value)}
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
                        {value}
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