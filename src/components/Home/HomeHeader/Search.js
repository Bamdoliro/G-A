import { StyleSheet, Image, View, TextInput } from 'react-native';
import { useState } from 'react';
import SearchIcon from "../../../assets/Search_Icon.png"

export default function Search(){
    return (
      <View style={styles.SearchFrame}>
        <Image
          source={SearchIcon}
          style={styles.SearchIcon}
        />
        <TextInput
            style={styles.MainHeaderSearch}
            placeholder="공동체 검색 또는 코드 입력"
        />
      </View>
    );
};

const styles = StyleSheet.create({
    SearchFrame: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
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
    MainHeaderSearch: {
        color: "#B1B1B1",
        fontSize: 16,
        width: "100%",
        height: "100%",
        outlineStyle: "none",
    }
})
