import {StyleSheet, Text, View} from 'react-native';
import community from "../../../data/CummunityData.json";
import Bell from "../../common/Bell/Bell";
import DownArrow from "../../common/DownArrow/DownArrow";

export default function CommunityHeader() {

    return (
        <View style={styles.container}>
            <View style={styles.numberOfPeople}>
                <View style={styles.numberOfPeople.blueCircle}/>
                <Text style={styles.numberOfPeople.text}>
                    {community.numberOfPeople}명
                </Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.name.text}>
                    {community.name}
                </Text>
                <DownArrow
                    onPress={() => {
                    }}
                />
            </View>

            <Text style={styles.introduction}>
                {community.introduction}
            </Text>
            <Bell
                style={styles.bell}
            />
        </View>
    )
        ;
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 125,
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 10,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,

        // shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
    },
    numberOfPeople: {
        flexDirection: "row",
        alignItems: "center",
        blueCircle: {
            borderRadius: "50%",
            backgroundColor: "#0D76FF",
            width: 8,
            height: 8,
            marginRight: 5,
        },
        text: {
            color: "#0D76FF",
            fontSize: 15,
        }
    },
    name: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        text: {
            fontSize: 25,
            fontWeight: "bold",
            marginRight: 5,
        }
    },
    introduction: {
        color: "#535353",
        fontSize: 15,
    },
    bell: {
        position: "absolute",
        right: 20,
        top: 35,
    },
})
