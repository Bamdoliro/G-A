import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function DateInput({value, setValue}) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setValue(date);
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity
                onPress={showDatePicker}
            >
                <Text style={styles.date}>{value.toLocaleDateString()}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                value={value}
                locale="ko"
                style={styles.modal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#0D76FF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    modal: {
        height: 200
    }
})
