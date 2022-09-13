import React, { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import CustomInput from "../components/CustomInput/CustomInput";
import Logo from "../assets/img.png";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <View style={styles.innerBox}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <CustomInput
          placeholder="이메일 입력"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="비밀번호 입력"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avoidingView: {
    flex: 1,
  },
  innerBox: {
    height: "70%",
    width: "84%",

    backgroundColor: "white",
    borderRadius: 30,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    bottom: "5%",
    width: "100%",
    height: "46%",
  },
  root: {
    flex: 1,
    backgroundColor: "#0D76FF",
    justifyContent: "center",
    alignItems: "center",
  },
});
