import { StyleSheet, TextInput, Image, View, Text } from 'react-native';
import MenuBar from '../CommunityHeader/MenuBar';
import NotificationBar from '../CommunityHeader/NotificationBar';
import PostChange from '../CommunityHeader/PostChange';
import pencilIcon from '../../../assets/Pencil_Icon.png';
import arrowDownIcon from '../../../assets/Arrow_Down_Icon.png';

export default function CommunityHeader(props){
    return (
        <View style={styles.communityHeader}>
            <View style={styles.communityHeaderTop}>
                <MenuBar />
                <View style={styles.communitySum}> // 부산 소프트웨어마고 ~ ... 참여 중입니다! 부분
                    <View style={styles.communityName}>
                        <Text>
                            부산 소프트웨어마고
                        </Text>
                        <Image
                            source={arrowDownIcon}
                            style={styles.arrowDownIcon}
                        />
                    </View>
                    <Text>
                        {props.joinMembers}명이 참여 중입니다!
                    </Text>
                </View>
                <NotificationBar />
            </View>
            <View style={styles.communityDetailFrame}>
                <Image
                    source={pencilIcon}
                    style={styles.pencilIcon}
                />
                <TextInput
                    style={styles.communityDetail}
                    placeholder='커뮤니티에 대한 설명을 적어 주세요'
                />
            </View>
            <PostChange
                values={["게시글", "가티"]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    communityHeader: {
        width: "100%",
        height: 232,
        backgroundColor: "#FFFFFF",
        marginBottom: 48,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1
    },

    communityHeaderTop: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    communitySum: {
        flexDirection: 'column',
        alignItems: 'center',

        communityName: {
            flexDirection: 'row',
            justifyContent: 'center',

            communityNameText: {
                color: "#000000",
                fontSize: 20,
                fontWeight: 700
            },
            arrowDownIcon: {
                width: 20,
                height: 20,
                marginTop: 76,
                marginRight: 98
            },
        },
    },

    communityDetailFrame: {
        width: "80%",
        height: 46,
        borderRadius: 7,
        paddingTop: 8,
        backgroundColor: "#F2F2F2",
        marginTop: 27,

        communityDetail: {
            color: "000000",
            backgroundColor: "F2F2F2",
            width: 324,
            height: 46
        },

        pencilIcon: {
            width: 11,
            height: 11,
            marginRight: 11,
            marginBottom: 5
        },
    },
})