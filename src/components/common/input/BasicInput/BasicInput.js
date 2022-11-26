import {StyleSheet, TextInput} from "react-native";

export default function BasicInput({value, setValue, placeholder, secureTextEntry, style}) {
    return (
        <TextInput
            style={[styles.nameInput, style]}
            value={value}
            onChangeText={text => setValue(text)}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
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
