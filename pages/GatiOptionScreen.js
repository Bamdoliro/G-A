import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import GatiHeader from "../components/common/GatiHeader/GatiHeader";
import NumberInput from "../components/common/NumberOfPeopleInput/NumberOfPeopleInput"
import OptionBtn from "../components/common/OptionBtn/OptionBtn";

export default function GatiOptionScreen() {
    const [isNumberOfPeople, setNumberOfPeople] = useState("25");
    const [isPrivatePublic, setPrivatePublict] = useState(true);

    const TestAlert = (AlertMsg) => {
        alert(AlertMsg);
    }

    return (
        <View style={styles.GatiOptionScreen}>
            <GatiHeader
                HeaderTitle="설정"
            />
            <View style={styles.GatiNameInputFrame}>
                <Text style={styles.GatiInputTitle}>공동체 이름</Text>
                <TextInput
                    style={styles.GatiNameInput}
                />
            </View>
            <View style={styles.NumberOfPeopleArea}>
                <Text style={styles.NumberOfPeopleTitle}>
                    인원수
                </Text>
                <NumberInput
                    setNumberOfPeople={setNumberOfPeople}
                    isNumberOfPeople={isNumberOfPeople}
                />
            </View>
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
            <View style={{alignItems: "center", marginTop: 10}}>
                <TouchableOpacity onPress={() => TestAlert("핀 번호 재설정 하기 누름")}>
                    <Text style={{color: "#0D76FF", fontSize: 16, fontWeight: "bold", marginTop: 5}}>PIN번호 재설정 하기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => TestAlert("공동체 삭제 하기 누름")}>
                    <Text style={{color: "#FF6D6D", fontSize: 16, fontWeight: "bold", marginTop: 5}}>공동체 삭제 하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GatiOptionScreen: {
        flex: 1,
        borderWidth: 1,
        alignItems: "center"
    },
    // input 부분
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
    // 인원수
    NumberOfPeopleTitle: {
        fontSize: 18,
        color: "#999999",
        fontWeight: "bold"
    },
    NumberOfPeopleArea: {
        width: 300,
        marginTop: 10,
    },
    // 공개 비공개
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
})