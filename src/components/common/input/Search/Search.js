import {Image, StyleSheet, TextInput, View} from 'react-native';
import SearchIcon from "../../../../assets/Search_Icon.png"

export default function Search({placeholder, setSearchWord, SearchWord}){
    return (
      <View style={styles.SearchFrame}>
        <Image
          source={SearchIcon}
          style={styles.SearchIcon}
        />
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={setSearchWord}
            value={SearchWord}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    SearchFrame: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 35,
        borderRadius: 26,
        padding: 8,
        backgroundColor: "#F2F2F2",
        marginTop: 10
    },
    SearchIcon: {
        width: 23,
        height: 23,
        marginRight: 10
    },
    input: {
        fontSize: 16,
        width: "100%",
        height: "100%",
        outlineStyle: "none",
    }
})
