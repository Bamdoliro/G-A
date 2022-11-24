import {Image, StyleSheet, TextInput, View} from "react-native";
import GrayGati from "../../../../assets/GrayGati.png";

export default function TextArea({content, setContent}) {
    return (
        <View style={styles.container}>
            <Image source={GrayGati} style={styles.logo}/>
            <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
        padding: 10,
        backgroundColor: "#F2F2F2",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        textAlign: "left"
    },
    logo: {
        position: "absolute"
    }
})
