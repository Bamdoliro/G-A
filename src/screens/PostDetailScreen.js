import { StyleSheet } from 'react-native';
import SafeAreaView from '../components/common/SafeAreaView/SafeAreaView';
import DetailHeader from '../components/Feed/detail/DetailHeader';

const PostDetailScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.root}>
            <DetailHeader 
                navigation={navigation}
                style={styles.header}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 30
    },
})

export default PostDetailScreen;
