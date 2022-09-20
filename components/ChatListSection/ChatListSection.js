import { ScrollView, StyleSheet } from "react-native";

export default function ChatListSection() {
    return (
        <ScrollView style={styles.ScrollSection}>
            {/* ChatList.js 를 여기다 넣어야함 근데 지금 넣고 Merge 하면 충돌될께 뻔해서 내가 합치겠음 Scroll 잘 되는건 확인함. */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollSection: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
    }
})