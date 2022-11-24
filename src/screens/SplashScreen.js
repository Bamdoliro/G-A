import { View, Image, StyleSheet } from "react-native";
import GatiLogo from "../assets/GatiBlueLogo.png"

export default function SplashScreen() {
    return (
        <View style={styles.SplashScreen}>
            <Image 
                source={GatiLogo}
                style={{width: 95, height: 100}}
            />     
        </View>
    )
}

const styles = StyleSheet.create({
    SplashScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
})