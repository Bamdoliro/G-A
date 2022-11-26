import {StyleSheet, Text, View} from 'react-native';
import community from "../../../data/CummunityData.json";
import DownArrow from "../../common/icon/DownArrow/DownArrow";
import MainHeader from "../../common/header/MainHeader/MainHeader";

export default function CommunityHeader({setChangeCommunityModalIsOpen}) {

    return (
        <MainHeader
            child={
                <>
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
                            onPress={() => setChangeCommunityModalIsOpen(true)}
                        />
                    </View>

                    <Text style={styles.introduction}>
                        {community.introduction}
                    </Text>
                </>
            }
            style={styles.container}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    numberOfPeople: {
        flexDirection: "row",
        alignItems: "center",
        blueCircle: {
            borderRadius: 999,
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
