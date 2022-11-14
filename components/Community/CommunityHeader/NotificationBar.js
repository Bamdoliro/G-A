import { StyleSheet, Image, View } from 'react-native';
import bellIcon from "../../../assets/Bell_Icon.png";

export default function NotificationBar(){
    return (
        <View>
            <Image
                source={bellIcon}
                style={styles.bellIcon}
                onPress={() => console.log("알림 아이콘 클릭됨")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
   bellIcon: {
       width: 30,
       height: 30,
       marginRight: 31
   } 
})