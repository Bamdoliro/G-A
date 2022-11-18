import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ArrowIcon from "../../../assets/arrow.png";
import OptionIcon from "../../../assets/option.png";

const PostDetailHeader = ({navigation}) => {
    return (
        <View style={styles.PostDetailHeaderContainer}>
            <View style={styles.PostDetailHeaderArrowContainer}>
                <View style={styles.PostDetailHeaderDisplayChildFlex}/>
                <View style={styles.PostDetailHeaderDisplayFlex}>
                    <View style={styles.PostDetailHeaderDisplayChildFlex}/>
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                    >
                    <Image source={ArrowIcon} style={styles.PostDetailBackArrow}/>
                    </TouchableOpacity>
                    <View style={styles.PostDetailHeaderDisplayChildFlex}/>
                </View>
                <View style={styles.PostDetailHeaderDisplayChildFlex}/>
            </View>
            <View style={styles.PostDetailHeaderProfile}>
                {/* <Image source={} /> */}
                <View style={styles.PostDetailHeaderProfileImage}/>
                <View>
                    <Text style={styles.PostDetailHeaderProfileName}>2215 최태영</Text>
                    <Text style={styles.PostDetailHeaderProfileTime}>20분 전</Text>
                </View>
            </View>
            <View style={styles.PostDetailHeaderOptionContainer}>
                <Image source={OptionIcon} style={styles.PostDetailHeaderOption}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PostDetailHeaderContainer: {
        display: 'flex',
        height: 40,
        width: '100%',
        // justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row'
    },
    PostDetailHeaderArrowContainer: {
        width: 60,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    PostDetailHeaderDisplayFlex: {
        display: 'flex'
    },
    PostDetailHeaderDisplayChildFlex: {
        flex: '1'
    },
    PostDetailBackArrow: {
        width: 10,
        height: 17,
    },
    PostDetailHeaderProfile: {
        display: 'flex',
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    PostDetailHeaderProfileImage: {
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D9',
        borderRadius: 30
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
        lineHeight: 11,
    },
    PostDetailHeaderOptionContainer: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: 50,
        marginLeft: 'auto'
    },
    PostDetailHeaderOption: {
        width: 8,
        height: 25
    }
})

export default PostDetailHeader;
