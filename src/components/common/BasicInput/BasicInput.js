import {StyleSheet, TextInput} from "react-native";

export default function BasicInput({value, setValue}) {
    return (
        <TextInput
            style={styles.nameInput}
            value={value}
            onChangeText={text => setValue(text)}
        />
    )
}

const styles = StyleSheet.create({
    nameInput: {
        borderBottomWidth: 2,
        borderColor: "#0D76FF",
        height: 28,
        fontSize: 18
    },
})
