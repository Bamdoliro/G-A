import { View, StyleSheet, Image,TouchableOpacity, Text } from "react-native";
import ArrowIcon from "../../../assets/arrow.png";
import DotDotDot from "../../../assets/dotdotdot.png"
import {useNavigation} from "@react-navigation/native";
import {dateKoreanFormatter} from "../../../utils/etc/dateTimeFormatter";

export default function DetailHeader({data, style}) {
    const navigation = useNavigation();

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
                        source={{uri: data?.userProfile.image}}
                        style={styles.profile}
                    />
                </View>
                <View style={{paddingLeft: 5, justifyContent: "space-between"}}>
                    <Text style={styles.name}>{data?.userProfile.name}</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <View style={styles.dot} />
                        <Text style={styles.betime}>{dateKoreanFormatter(data?.createdAt)}</Text>
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
        paddingTop: 30,
        paddingHorizontal: 30,
        backgroundColor: "#fff"
    },
    ArrowIcon: {
        width: 10,
        height: 20,
        marginRight: 10
    },
    profile: {
        width: 39,
        height: 39,
        borderRadius: 39,
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
