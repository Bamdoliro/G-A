import { View, Image, StyleSheet } from "react-native";
import GatiLogo from "../assets/GrayGati.png"

export default function SplashScreen() {
    return (
        <View style={styles.SplashScreen}>
            <Image 
                source={GatiLogo}
            />     
        </View>
    )
}

const styles = StyleSheet.create({
    SplashScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0D76FF"
    }
})