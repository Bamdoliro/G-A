import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView'
import PostDetail from "../components/post/detail/PostDetail"
import PostDetailComment from '../components/post/detail/PostDetailComment'
import PostDetailHeader from "../components/post/detail/PostDetailHeader"

const PostDetailScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
      <PostDetailHeader />
      <PostDetail />
    </SafeAreaView>
  )
}

export default PostDetailScreen