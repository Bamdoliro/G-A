import {useState} from "react";
import {StyleSheet, View} from "react-native";
import PostDetailCommentItem from "./PostDetailCommentItem";

const PostDetailComment = () => {
  const [commentModal, setCommentModal] = useState(false);

  return (
    <View style={styles.PostDetailCommentContainer}>
      <PostDetailCommentItem commentModal={commentModal} setCommentModal={setCommentModal} />
    </View >
  )
}

const styles = StyleSheet.create({
  PostDetailCommentContainer: {
    marginTop: 32,
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  }
})

export default PostDetailComment;
