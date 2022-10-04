import { ScrollView, View, Text, StyleSheet } from "react-native";
import MyCommunity from "./MyCommunity";

export default function MyCommunities() {
    return (
        <View>
            <View style={styles.MyCommunitiesTitle}>
                <Text style={styles.MyCommunitiesH1}>내 커뮤니티</Text>
                <Text onPress={() => {alert('더보기가 눌림')}} style={styles.MyCommunitiesShowMore}>더보기...</Text>
            </View>
            <ScrollView 
                horizontal = {true}
                style={styles.MyCommunitiesScrollView}
            >
                <MyCommunity />
                <MyCommunity />
                <MyCommunity />
                <MyCommunity />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    MyCommunitiesScrollView: {
        paddingLeft: 20
    },
    MyCommunitiesTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end' ,
        marginBottom: 13,
        paddingLeft: 30,
        paddingRight: 30
    },
    MyCommunitiesH1: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    MyCommunitiesShowMore: {
        fontSize: 14,
        color: '#0D76FF'
    }
});