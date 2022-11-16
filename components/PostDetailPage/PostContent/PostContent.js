import {Text, ScrollView, Image, View, StyleSheet } from 'react-native';

import GrayCircle from '../../../assets/grayCommonCircle.png';
import PostImage from '../../../assets/PostImage.png';

import GoBackBtn from '../PageButtons/GoBackBtn';
import LikeBtn from '../PageButtons/LikeBtn';
import CommentBtn from '../PageButtons/CommentBtn';

import PostMainContent from '../PostContent/PostMainContent';
import UserProfile from '../PostContent/UserProfile';
import ViewMenu from '../PageButtons/ViewMenu';


export default function PostContent() {
    return (
        <View style={styles.postContentPart}>
            <View style={styles.postContentTop}>
                <GoBackBtn style={{ marginLeft: 23 }} />
                <UserProfile    
                    profileImage={GrayCircle}
                    userName="2215 최태영"
                    sentTime={20}
                />
                <ViewMenu style={{ marginRight: 31 }}/>
            </View>
            <View>
                <PostMainContent 
                    postTitle="세탁기 빨래 본인 것만 가져가 주세요..."
                    contentOfPost="요즘에 세탁물 분실 사례가 너무 많은데 본인 빨래만 가져가고 본인
                    빨래가 아니다 싶으면 세탁실에 다시 돌려 놓아 주세요..."
                    postImage={PostImage}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <LikeBtn />
                <CommentBtn />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postContentPart: {
        flex: 2,
        flexDirection: 'column',
        marginTop: 10
    },

    postContentTop: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})