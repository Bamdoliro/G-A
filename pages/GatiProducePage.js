import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from "react-native";
import OptionBtn from "../components/common/OptionBtn/OptionBtn";
import ArrowIcon from "../assets/arrow.png"
import CameraIcon from "../assets/camera.png"
import HumanIcon from "../assets/human_blue.png"
import { useState } from "react";

export default function GatiProducePage({navigation}) {

    const [isPrivatePublic, setPrivatePublict] = useState(true);
    const [isNumberOfPeople, setNumberOfPeople] = useState("25");

    return (
        <View style={styles.GatiProduceContainer}>
            {/* Header 부분 */}
            <View style={styles.GatiProduceHeader}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.GatiTitleText}>
                    공동체 생성
                </Text>
                <TouchableOpacity>
                    <Text style={styles.CompletionText}>
                        완료
                    </Text>
                </TouchableOpacity>
            </View>
            {/* 사진 */}
            <View style={styles.UploadImgContent}>
                <Image
                    source={CameraIcon}
                    style={styles.CameraIcon}
                />
            </View>
            {/* 공동체 이름 */}
            <View style={styles.GatiNameInputFrame}>
                <Text style={styles.GatiInputTitle}>공동체 이름</Text>
                <TextInput
                    style={styles.GatiNameInput}
                />
            </View>
            {/* 공개 비공개 설정 */}
            <View style={styles.PrivatePublicOption}>
                <Text style={styles.PrivatePublicOptionTitle}>
                    공개/비공개 설정
                </Text>
                <View style={styles.OptionBtnArea}>
                    <OptionBtn
                        Title="공개"
                        SubTitle="사용자 모두가 공동체에 참여 할 수 있습니다!"
                        Focus={isPrivatePublic}
                        setPrivatePublict={setPrivatePublict}
                        Option="public"
                    />
                    <OptionBtn
                        Title="비공개"
                        SubTitle="사용자는 비밀번호를 입력 한 후 입장 할 수 있습니다!"
                        Focus={!isPrivatePublic}
                        setPrivatePublict={setPrivatePublict}
                        Option="private"
                    />
                </View>
            </View>
            {/* 인원수 */}
            <View style={styles.NumberOfPeopleArea}>
                <Text style={styles.NumberOfPeopleTitle}>
                    인원수
                </Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image
                        source={HumanIcon}
                        style={styles.HumanIcon}
                    />
                    <View style={styles.NumberOfPeopleFrame}>
                        <TextInput
                            style={styles.NumberOfPeopleInput}
                            value={isNumberOfPeople}
                            onChangeText={(text) => setNumberOfPeople(text)}
                            keyboardType="number-pad"
                        />
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    GatiProduceContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    GatiProduceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        width: 300
    },
    ArrowIcon: {
        width: 10,
        height: 20,
    },
    GatiTitleText: {
        fontSize: 19,
        fontWeight: "bold",
    },
    CompletionText: {
        fontSize: 15,
        color: "#0D76FF"
    },
    UploadImgContent: {
        width: 300,
        height: 130,
        borderRadius: 12,
        backgroundColor: "#F2F2F2",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    CameraIcon: {
        width: 60,
        height: 60
    },
    GatiNameInputFrame: {
        borderBottomWidth: 2,
        borderColor: "#0D76FF",
        marginTop: 20
    },
    GatiNameInput: {
        width: 300,
        height: 28,
        fontSize: 18
    },
    GatiInputTitle: {
        fontSize: 18,
        color: "#999999",
        fontWeight: "bold"
    },
    // 옵션 버튼 부분
    PrivatePublicOption: {
        width: 300,
        height: 150,
        marginTop: 30,
    },
    PrivatePublicOptionTitle: {
        fontSize: 18,
        color: "#999999",
        fontWeight: "bold"
    },
    OptionBtnArea: {
        width: 300,
    },
    NumberOfPeopleTitle: {
        fontSize: 18,
        color: "#999999",
        fontWeight: "bold"
    },
    NumberOfPeopleArea: {
        width: 300,
        marginTop: 10,
    },
    NumberOfPeopleFrame: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#0D76FF",
        width: 85,
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        borderRadius: 12,
        marginLeft: 10
    },
    NumberOfPeopleInput: {
        width: "100%",
        height: "100%"
    },
    HumanIcon: {
        width: 25,
        height: 25
    }
})