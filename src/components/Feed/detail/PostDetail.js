import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PostImage from '../../../assets/post_img.png';
import HeartImage from '../../../assets/heart.png';
import ChatImage from '../../../assets/chat.png';
import PostDetailComment from './PostDetailComment';

const PostDetail = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>세탁기 빨래 본인 것만 가져가 주세요...</Text>
                <Image source={PostImage} style={styles.image} resizeMethod="auto"/>
                <Text style={styles.content}>요즘에 세탁물 분실 사례가 너무 많은데 본인 빨래만 가져가고 본인
                    빨래가 아니다 싶으면 세탁실에 다시 돌려 놓아 주세요...</Text>
                <View style={styles.reaction}>
                    <View>
                        <Image source={HeartImage} style={{width: 26, height: 26}}/>
                    </View>
                    <View style={{marginLeft: 15}}>
                        <Image source={ChatImage} style={{width: 25, height: 25}}/>
                    </View>
                </View>
                <PostDetailComment/>
                <PostDetailComment/>
                <PostDetailComment/>
                <PostDetailComment/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 30,
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 23,
    },
    image: {
        width: "100%",
        height: "30%",
        backgroundColor: "#f4f4f4",
        marginVertical: 10,
    },
    content: {
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 17,
    },
    reaction: {
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 20,
    }
});

export default PostDetail;
