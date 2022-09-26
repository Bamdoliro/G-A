import { StyleSheet, Image, View, TextInput } from 'react-native';
import { useState } from 'react';
import SearchIcon from '../../assets/Search_Icon.png';

export default function ChatRoomSearch(){
  const [search, setSearch] = useState("");

    return (
      <View style={styles.SearchFrame}>
        <Image
          source={SearchIcon}
          style={styles.SearchIcon}
        />
        <TextInput
            style={styles.ChatRoomSearch}
            placeholder="공동체 채팅방 검색"
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
        marginTop: 20
    },
    SearchIcon: {
        width: 23,
        height: 23,
        marginRight: 10
    },
    ChatRoomSearch: {
        color: "#B1B1B1",
        fontSize: 16,
        width: "100%",
        height: "100%",
        outlineStyle: "none",
    }
})
