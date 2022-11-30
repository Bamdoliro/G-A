import {Image, StyleSheet, Text, View} from "react-native";
import BlueRightArrow from "../../../assets/BlueRightArrow.png";

export default function CapacityBar({capacity, numberOfJoiner}) {

    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <View style={[styles.bar, {width: `${numberOfJoiner ? (numberOfJoiner / capacity) * 100 : 3}%`}]}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{numberOfJoiner ? numberOfJoiner : 0}/{capacity}명 참여 중</Text>
                <Image source={BlueRightArrow} style={styles.arrow}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 20,
    },
    barContainer: {
        width: "100%",
        height: 12,
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        paddingHorizontal: 3.5,
        justifyContent: "center"
    },
    bar: {
        backgroundColor: "#7EB6FF",
        height: 5,
        borderRadius: 10,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    text: {
        color: "#7EB6FF",
        fontWeight: "600",
        fontSize: 12,
    },
    arrow: {
        width: 18,
        height: 18,
    }
})
