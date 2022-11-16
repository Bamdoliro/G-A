import { TextInput, StyleSheet } from "react-native"

export default function GatiIntroduction({setIntroduction, isIntroduction}) {
    return (
        <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.GatiIntroductionInput}
            onChangeText={(text) => setIntroduction(text)}
        />
    )
}

const styles = StyleSheet.create({
    GatiIntroductionInput: {
        backgroundColor: "#F2F2F2",
        borderRadius: 12,
        height: 200,
        padding: 16,
        marginTop: 5,
        marginBottom: 30
    }
})