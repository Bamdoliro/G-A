import { cloneElement } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import PostImage from '../../../assets/post_img.png';
import HeartImage from '../../../assets/heart.png';
import ChatImage from '../../../assets/chat.png';
import { setStatusBarStyle } from 'expo-status-bar';
import PostDetailComment from './PostDetailComment';

const PostDetail = () => {

  return (
    <ScrollView>
      <View style={styles.PostDetailContainer}>
        <View style={styles.PostDetailBox}>
          <Text style={styles.PostDetailTitle}>세탁기 빨래 본인 것만 가져가 주세요...</Text>
        </View>
        <View>
          <Image source={PostImage} style={styles.PostDetailImage} />
        </View>
        <View style={{ width: 340, marginTop: 10 }}>
          <Text style={styles.PostDetailContent}>요즘에 세탁물 분실 사례가 너무 많은데 본인 빨래만 가져가고 본인
            빨래가 아니다 싶으면 세탁실에 다시 돌려 놓아 주세요...</Text>
        </View>
        <View style={{ width: 340, marginTop: 20 }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View>
              <Image source={HeartImage} style={{ width: 26, height: 26 }} />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Image source={ChatImage} style={{ width: 25, height: 25 }} />
            </View>
          </View>
        </View>
      </View >
      <PostDetailComment />
      <PostDetailComment />
      <PostDetailComment />
      <PostDetailComment />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  PostDetailContainer: {
    marginTop: 20,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  PostDetailFlex: {
    flex: '1'
  },
  PostDetailTitle: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23,
  },
  PostDetailBox: {
    width: 345,
    marginBottom: 5
  },
  PostDetailImage: {
    width: 350,
    height: 255
  },
  PostDetailContent: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 17,
  }
});

export default PostDetail;