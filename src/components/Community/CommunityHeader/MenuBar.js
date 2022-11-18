import { StyleSheet, Image, View } from 'react-native';
import mainToggleIcon from '../../../assets/main_toggle.png';

export default function MenuBar(){
    return (
        <View>
            <Image
                source={mainToggleIcon}
                style={styles.mainToggleIcon}
                onPress={() => console.log("메뉴바 클릭됨")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainToggleIcon: {
        width: 25,
        height: 25,
    }
})
