import {StyleSheet, TouchableOpacity, View} from "react-native";

export default function Toggle({value, setValue}) {
    return (
        <TouchableOpacity
            style={[styles.container, value ? styles.activate : null]}
            onPress={() => setValue(!value)}
        >
            <View style={styles.toggle}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 38,
        backgroundColor: '#D9D9D9',
        borderRadius: 99999,
        alignItems: 'flex-start',
        padding: 3
    },
    activate: {
        alignItems: 'flex-end',
        backgroundColor: '#22D03E',
    },
    toggle: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 999,
    },
})
