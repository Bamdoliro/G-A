import { ScrollView, View, Text, StyleSheet } from "react-native";
import MyCommunity from "./MyCommunity";

export default function MyCommunities() {
    return (
        <View style={styles.MyCommunities}>
            {/*  */}
            <View style={styles.MyCommunitiesTitle}>
                <Text style={styles.MyCommunitiesH1}>내 커뮤니티</Text>
                <Text onPress={() => {alert('asdf')}} style={styles.MyCommunitiesShowMore}>더보기...</Text>
            </View>
            <ScrollView horizontal style={styles.MyCommunitiesScrollView}>
                <MyCommunity />
                <MyCommunity />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    MyCommunitiesScrollView: {
        marginLeft: 20
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
        fontSize: 16,
        fontWeight: 'bold'
    },
    MyCommunitiesShowMore: {
        fontSize: 10,
        color: '#0D76FF'
    }
});