import {StyleSheet, TextInput, View} from "react-native";

export default function FrameInput({value, setValue, editable=true, keyboardType="default"}) {

    return (
        <View style={styles.container}>
            <TextInput
                value={value instanceof Date ? value.toLocaleDateString() : value}
                onChangeText={(text) => setValue(text)}
                editable={editable}
                keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#0D76FF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
})
