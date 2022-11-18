import {View, TextInput, Image, StyleSheet} from "react-native"
import HumanIcon from "../../../assets/human_blue.png"

export default function NumberOfPeopleInput({setNumberOfPeople, isNumberOfPeople}) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
                source={HumanIcon}
                style={styles.HumanIcon}
            />
            <View style={styles.NumberOfPeopleFrame}>
                <TextInput
                    style={styles.NumberOfPeopleInput}
                    value={isNumberOfPeople}
                    onChangeText={(text) => setNumberOfPeople(text)}
                    keyboardType="number-pad"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NumberOfPeopleFrame: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#0D76FF",
        width: 85,
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        borderRadius: 12,
        marginLeft: 10
    },
    NumberOfPeopleInput: {
        width: "100%",
        height: "100%"
    },
    HumanIcon: {
        width: 30,
        height: 25,
    },
})
