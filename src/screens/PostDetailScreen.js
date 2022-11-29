import { StyleSheet, View } from 'react-native';
import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import DetailHeader from '../components/Feed/detail/DetailHeader';
import PostDetail from '../components/Feed/detail/PostDetail';

const PostDetailScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.contents}>
               <DetailHeader 
                navigation={navigation}
                style={styles.header}
                />
                <PostDetail /> 
            </View>
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
