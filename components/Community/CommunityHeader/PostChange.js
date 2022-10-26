import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function PostChange(){
    return (
        <View>
            <TouchableOpacity
                onPress={() => console.log("게시글 클릭됨")}
            >
                <LinearGradient style={styles.container} colors={['#0D76FF', '#5D42FF']}>
                    <Text>게시글</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log("가티 클릭됨")}
            >
                <LinearGradient style={styles.container} colors={['#0D76FF', '#5D42FF']}>
                    <Text>가티</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
})