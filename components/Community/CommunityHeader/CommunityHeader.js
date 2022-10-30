import { StyleSheet, TextInput, Image, View, Text } from 'react-native';
import MenuBar from '../CommunityHeader/MenuBar';
import NotificationBar from '../CommunityHeader/NotificationBar';
import PostChange from '../CommunityHeader/PostChange';
import pencilIcon from '../../../assets/Pencil_Icon.png';
import arrowDownIcon from '../../../assets/Arrow_Down_Icon.png';

export default function CommunityHeader(props){
    return (
        <View>
            <View style={styles.communitySum}>
                <MenuBar />
                <View>
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
                label="PostChangeBtn"
                values={["게시글", "가티"]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    communityHeaderContainer: {

    },

    communitySum: {
    
        communityName: {

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
            height: 46,
        },

        pencilIcon: {
            width: 11,
            height: 11,
            marginRight: 11,
            marginBottom: 5
        },
    },
})