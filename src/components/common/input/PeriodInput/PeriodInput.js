import {Image, StyleSheet, Text, View} from "react-native";
import BlueCalender from "../../../../assets/BlueCalender.png";
import DateInput from "../DateInput/DateInput";

export default function PeriodInput({period, setPeriod}) {

    return (
        <View style={styles.container}>
            <Image source={BlueCalender} style={styles.icon}/>
            <DateInput
                value={period.startDate}
                setValue={date => setPeriod({...period, startDate: date})}
            />
            <Text style={styles.wave}>~</Text>
            <DateInput
                value={period.endDate}
                setValue={date => setPeriod({...period, endDate: date})}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    wave: {
        color: "#0D76FF",
        fontWeight: "bold",
        marginHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
})
