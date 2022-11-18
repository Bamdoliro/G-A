import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ArrowIcon from "../../../assets/arrow.png";
import {useNavigation} from "@react-navigation/native";

export default function Header({title, buttonText, buttonOnPress, allowBack = true, style}) {
    const navigation = useNavigation()

    return (
        <View style={[styles.container, style]}>
            {allowBack ?
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                :
                <View style={styles.ArrowIcon}/>
            }
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity
                onPress={buttonOnPress}
            >
                <Text style={styles.buttonText}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 30,
    },
    ArrowIcon: {
        width: 10,
        height: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
    },
    buttonText: {
        fontSize: 15,
        color: "#0D76FF"
    },
})
