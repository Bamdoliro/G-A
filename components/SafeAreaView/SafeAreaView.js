import React from "react";
import {SafeAreaView as RNSafeAreaView, StyleSheet} from "react-native";

const SafeAreaView = ({ children, style, ...rest }) => (
    <RNSafeAreaView style={StyleSheet.compose(styles.container, style)} {...rest}>
        {children}
    </RNSafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});

export default SafeAreaView;
