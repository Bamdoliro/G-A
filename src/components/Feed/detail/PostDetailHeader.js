import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ArrowIcon from "../../../assets/arrow.png";
import OptionIcon from "../../../assets/option.png";
import {useNavigation} from "@react-navigation/native";

const PostDetailHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                <View style={styles.PostDetailHeaderProfile}>
                    {/* <Image source={} /> */}
                    <View style={styles.PostDetailHeaderProfileImage}/>
                    <View>
                        <Text style={styles.PostDetailHeaderProfileName}>2215 최태영</Text>
                        <Text style={styles.PostDetailHeaderProfileTime}>20분 전</Text>
                    </View>
                </View>
            </View>
            <Image source={OptionIcon} style={styles.PostDetailHeaderOption}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        paddingVertical: 7,
        paddingHorizontal: 30,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    ArrowIcon: {
        width: 10,
        height: 20,
        marginRight: 15,
    },
    PostDetailHeaderProfile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    PostDetailHeaderProfileImage: {
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D9',
        borderRadius: 30,
        marginRight: 5,
    },
    PostDetailHeaderProfileFont: {
        display: 'flex',
    },
    PostDetailHeaderProfileName: {
        color: '#0000000',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
    },
    PostDetailHeaderProfileTime: {
        fontWeight: '500',
        fontSize: 12,
    },
    PostDetailHeaderOption: {
        width: 25,
        height: 25
    }
})

export default PostDetailHeader;
