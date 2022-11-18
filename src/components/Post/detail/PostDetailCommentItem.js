import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useEffect} from 'react';
import OptionImage from '../../../assets/option.png';

const PostDetailCommentItem = ({commentModal, setCommentModal}) => {
    useEffect(() => {
        console.log(commentModal)
    }, [commentModal]);

    return (
        <View style={styles.PostDetailCommentItemContainer}>
            <View style={{display: "flex", flexDirection: 'row', alignItems: "center"}}>
                <View style={styles.PostDetailCommentItemProfileImg}>
                </View>
                <View style={{display: 'flex', marginLeft: 5, height: 50, justifyContent: "center"}}>
                    <View>
                        <Text style={styles.PostDetailCommentItemProfileName}>신중빈</Text>
                    </View>
                    <View>
                        <Text style={styles.PostDetailCommentItemProfileTime}>17분 전</Text>
                    </View>
                </View>
            </View>
            <View style={styles.PostDetailCommentItemContentContainer}>
                <View style={{flex: '1', marginLeft: 10, marginRight: 5}}>
                    <Text>화나요 화나요 화나요 화나요 화나요 화나요 화나요 화나요 화나요 화나요 화나요 화나요 </Text>
                </View>
                <View style={{marginRight: 'auto',}}>
                    <Pressable onPress={() => setCommentModal(!commentModal)}>
                        <Image source={OptionImage} style={{marginRight: 15, width: 8, height: 15}}/>
                    </Pressable>
                    {commentModal && <View style={styles.PostDetailCommentModal}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: 'white',
                            borderBottomColor: '#D9D9D9',
                            borderWidth: 3,
                            height: 25
                        }}>
                            <Text>신고</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', height: 25}}>
                            <Text>삭제</Text>
                        </View>
                    </View>}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PostDetailCommentItemContainer: {
        display: 'flex',
        width: 340,
    },
    PostDetailCommentItemProfileImg: {
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D9',
        borderRadius: 30
    },
    PostDetailCommentItemProfileName: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 18,
    },
    PostDetailCommentItemProfileTime: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14,
    },
    PostDetailCommentItemContentContainer: {
        backgroundColor: '#D9D9D9',
        width: 340,
        height: 60,
        borderRadius: 27,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    PostDetailCommentModal: {
        zIndex: 0,
        marginTop: 20,
        right: 10,
        position: 'absolute',
        display: 'flex',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 5,
        width: 70,
        height: 50,
        backgroundColor: 'white'
    }
});

export default PostDetailCommentItem;
