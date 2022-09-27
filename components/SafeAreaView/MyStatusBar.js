import {SafeAreaView, StatusBar, View, StyleSheet} from "react-native";

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
})

export default MyStatusBar;
