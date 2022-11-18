import {Image, StyleSheet, View} from "react-native"
import HumanIcon from "../../../assets/human_blue.png"
import FrameInput from "../FrameInput/FrameInput";

export default function NumberOfPeopleInput({setNumberOfPeople, numberOfPeople}) {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image
                source={HumanIcon}
                style={styles.HumanIcon}
            />
            <FrameInput
                value={numberOfPeople}
                setValue={setNumberOfPeople}
                keyboardType="number-pad"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    HumanIcon: {
        width: 30,
        height: 25,
        marginRight: 10,
    },
})
