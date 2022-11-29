import { StyleSheet, ScrollView } from 'react-native';
import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import DetailHeader from '../components/Feed/detail/DetailHeader';
import PostDetail from '../components/Feed/detail/PostDetail';
import SendField from '../components/common/input/SendField/SendField';

const PostDetailScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.contents}>
               <DetailHeader 
                navigation={navigation}
                style={styles.header}
                />
                <PostDetail /> 
            </ScrollView>
            <SendField />
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
