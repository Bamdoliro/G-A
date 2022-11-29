import { View, StyleSheet, Image,TouchableOpacity, Text } from "react-native";
import ArrowIcon from "../../../assets/arrow.png";
import DotDotDot from "../../../assets/dotdotdot.png"
import Seokkamoni from "../../../assets/seokkamoni.png"

export default function DetailHeader({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                <View>
                    <Image 
                        source={Seokkamoni}
                        style={styles.profile}
                    />
                </View>
                <View style={{paddingLeft: 5, justifyContent: "center"}}>
                    <Text style={styles.name}>SEOKKAMONI</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <View style={styles.dot} />
                        <Text style={styles.betime}>20분 전</Text>
                        {/* before time의 줄임말 */}
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <Image 
                    source={DotDotDot}
                    style={styles.dotdotdot}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
        paddingTop: 30
    },
    ArrowIcon: {
        width: 10,
        height: 20,
        marginRight: 10
    },
    profile: {
        width: 39,
        height: 39,
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
    },
    betime: {
        color: "#B0B0B0",
        fontSize: 12,
        paddingLeft: 2
    },
    dot: {
        width: 4,
        height: 4,
        backgroundColor: "#B0B0B0", 
        borderRadius: "50%",
    },
    dotdotdot: {
        width: 25,
        height: 25
    }
})