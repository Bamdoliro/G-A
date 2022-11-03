import {Text, ScrollView, Image, View, StyleSheet } from 'react-native';
import UserProfile from '../PostDetailPage/UserProfile';
import GoBackBtn from '../GoBackBtn';
import PostMainContent from './PostMainContent';
import ViewMenu from '../ViewMenu';
import LikeBtn from '../LikeBtn';
import CommentBtn from '../PageButtons/CommentBtn';
import GrayCircle from '../../assets/grayCommonCircle.png';
import PostImage from '../../assets/PostImage.png';

export default function PostContent() {
    return (
        <View>
            <View style={styles.postContentTop}>
                <GoBackBtn />
                <UserProfile 
                    profileImage={GrayCircle}
                    userName="2215 최태영"
                    sentTime={20}
                />
                <ViewMenu />
            </View>
            <View>
                <PostMainContent 
                    postTitle="세탁기 빨래 본인 것만 가져가 주세요..."
                    contentOfPost="요즘에 세탁물 분실 사례가 너무 많은데 본인 빨래만 가져가고 본인
                    빨래가 아니다 싶으면 세탁실에 다시 돌려 놓아 주세요..."
                    postImage={PostImage}
                />
            </View>
            <View>
                <LikeBtn />
                <CommentBtn />
            </View>
        </View>
    );
}