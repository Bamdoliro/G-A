import React, { forwardRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const CustomInput = forwardRef(({ value, setValue, placeholder, secureTextEntry, onSubmitEditing, returnKeyType, blurOnSubmit }, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        autoCapitalize={"none"}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        ref={ref}
      />
    </View>
  );
});

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    bottom: "3%",
    width: "87%",
    backgroundColor: "#F0F0F0",
    height: "8%",
    borderRadius: 5,
    borderColor: "#0D76FF",
    borderBottomWidth: 2,

    paddingHorizontal: 10,
    marginVertical: 5.5,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: "100%",
  },
});
