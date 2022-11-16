import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from "react-native";
import OptionBtn from "../components/common/OptionBtn/OptionBtn";
import ArrowIcon from "../assets/arrow.png"
import { useState } from "react";

import NumberInput from "../components/common/NumberOfPeopleInput/NumberOfPeopleInput";
import UploadImgContent from "../components/common/UploadImgContent/UploadImgContent";
import GatiIntroduction from "../components/common/GatiIntroduction/GatiIntroduction";

{/* 사진 클릭 이벤트 넣어줘야 함 */}


export default function GatiProduceScreen({ navigation }) {

    const [isPrivatePublic, setPrivatePublict] = useState(true);
    const [isNumberOfPeople, setNumberOfPeople] = useState("25");
    const [isIntroduction , setIntroduction] = useState("")

    return (
        <ScrollView style={styles.GatiProduceContainer}>
            <View style={{flex:1, alignItems: "center"}}>
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
                {/* 클릭 이벤트 넣어줘야 함 */}
                <UploadImgContent />
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
                    <NumberInput
                        setNumberOfPeople={setNumberOfPeople}
                        isNumberOfPeople={isNumberOfPeople}
                    />
                </View>
                {/* 공동체 소개 */}
                <View style={styles.GatiIntroduction}>
                    <Text style={styles.GatiIntroductionTitle}>
                        공동체 소개
                    </Text>
                    {/* 가티 소개글 */}
                    <GatiIntroduction
                        setIntroduction={setIntroduction}
                        isIntroduction={isIntroduction}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    GatiProduceContainer: {
        flexGrow: 1,
        backgroundColor: "#fff",
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
    // 인원수 부분
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
    // 공동체 소개
    GatiIntroduction: {
        width: 300,
        marginTop: 10
    },
    GatiIntroductionTitle: {
        fontSize: 18,
        color: "#999999",
        fontWeight: "bold"
    },
})
