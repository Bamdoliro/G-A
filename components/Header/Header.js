import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatRoomSearch from './ChatRoomSearch.js';
import Notice from './Notice.js';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                채팅
            </Text>
            <Notice />
            <ChatRoomSearch style={styles.chatRoomSearch}/>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    position: "relative",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: 'border-box'
  }, 
  text: {
      position: "absolute",
      width: 56,
      height: 36,
      fontSize: 30,
      color: "#000000",
      lineHeight: 36,
      paddingTop: 68,
      paddingLeft: 35
  },
  bellIcon: {
    position: "absolute",
    paddingTop: 71,
    paddingRight: 30,
  },
  chatRoomSearch: {
    position: 'absolute',
    paddingLeft: 33,
    paddingTop: 118
  }
})