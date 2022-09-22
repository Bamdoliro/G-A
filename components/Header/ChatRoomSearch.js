import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react/cjs/react.production.min';
import SearchIcon from '../../assets/Search_Icon.png';

export default function ChatRoomSearch(){
  const [search, setSearch] = useState("");

    return (
      <View style={styles.input}>
        <Image 
          source={SearchIcon}
          style={styles.searchIcon}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="공동체 채팅방 검색"
          keyboardType="default"
        />
      </View>
    );
};

const styles = StyleSheet.create({
    input: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F2F2F2',
      width: 324,
      height: 31,
      borderRadius: 26,
    },
    searchIcon: {
      padding: 10,
      marginVertical: 7,
      marginLeft: 19,
      width: 17,
      height: 17,
      alignItems: 'center'
    }
})