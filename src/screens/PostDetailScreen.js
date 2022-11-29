import { StyleSheet, ScrollView } from 'react-native';
import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import DetailHeader from '../components/Feed/detail/DetailHeader';
import PostDetail from '../components/Feed/detail/PostDetail';
import SendField from '../components/common/input/SendField/SendField';
import Seokkamoni from "../assets/seokkamoni.png"
import FeedImg from "../assets/feedImage.png"
import sendImg from "../assets/comment_send_field.png"

const PostDetailScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.contents}>
               <DetailHeader 
                navigation={navigation}
                style={styles.header}
                name="SEOKKAMONI"
                betime="20"
                img={Seokkamoni}
                />
                <PostDetail 
                    img={FeedImg}
                    title="세탁기 빨래 본인 것만 가져가 주세요..."
                    explanation="요즘에 세탁물 분실 사례가 너무 많은데 본인 빨래만 가져가고 본인 빨래가 아니다
                    싶으면 세탁실에 다시 돌려 놓아 주세요... ehdgoanfrhfaafdsfvxcjhjfdkoslkm
                    jhgghjlkmnbghhjlk.,mnbhjkl.,mnhj;l,.mh"
                /> 
            </ScrollView>
            <SendField 
                sendImg={sendImg}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
    },
    contents: {
        paddingHorizontal: 30
    }
})

export default PostDetailScreen;
