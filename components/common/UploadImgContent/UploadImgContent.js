import CameraIcon from "../../../assets/camera.png"
import {View, Image, StyleSheet} from "react-native"

export default function UploadImgContent() {
    return (
        <View style={styles.UploadImgContent}>
            <Image
                source={CameraIcon}
                style={styles.CameraIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    UploadImgContent: {
        width: 300,
        height: 130,
        borderRadius: 12,
        backgroundColor: "#F2F2F2",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    CameraIcon: {
        width: 60,
        height: 60
    },
})