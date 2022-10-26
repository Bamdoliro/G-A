import { StyleSheet, TextInput, Image, View, Text } from 'react-native';
import MenuBar from '../CommunityHeader/MenuBar';
import NotificationBar from '../CommunityHeader/NotificationBar';
import pencilIcon from '../../../assets/Pencil_Icon.png';
import arrowDownIcon from '../../../assets/Arrow_Down_Icon.png';

export default function CommunityHeader(props){
    return (
        <View>
            <View>
                <MenuBar />
                <View>
                    <View>
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
            <View>
                <Image
                    source={pencilIcon}
                    style={styles.pencilIcon}
                />
                <TextInput
                    style={styles.CommunityDetail}
                    placeholder='커뮤니티에 대한 설명을 적어 주세요'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    CommunityDetail: {
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
    arrowDownIcon: {
        width: 20,
        height: 20,
        marginTop: 76,
        marginRight: 98
    }
})