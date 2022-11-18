import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import NumberInput from "../components/common/NumberOfPeopleInput/NumberOfPeopleInput"
import Header from "../components/common/Header/Header";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import InputFrame from "../components/common/InputFrame/InputFrame";
import BasicInput from "../components/common/BasicInput/BasicInput";
import PublicScopeArea from "../components/Community/create/PublicScopeArea";

export default function CommunitySettingScreen() {
    const [name, setName] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("25");
    const [isPublic, setPublic] = useState(true);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header
                    title="공동체 설정"
                    buttonText="완료"
                    buttonOnPress={() => {
                    }}
                />
                <InputFrame
                    title="공동체 이름"
                    child={
                        <BasicInput
                            value={name}
                            setValue={setName}
                        />
                    }
                />
                <InputFrame
                    title="인원수"
                    child={
                        <NumberInput
                            setNumberOfPeople={setNumberOfPeople}
                            numberOfPeople={numberOfPeople}
                        />
                    }
                />
                <InputFrame
                    title="공개/비공개 설정"
                    child={
                        <PublicScopeArea
                            isPublic={isPublic}
                            setIsPublic={setPublic}
                        />
                    }
                />

                <View style={{alignItems: "center", marginTop: 10}}>
                    <TouchableOpacity onPress={() => alert("핀 번호 재설정 하기 누름")}>
                        <Text style={{color: "#0D76FF", fontSize: 16, fontWeight: "bold", marginTop: 10}}>PIN번호 재설정
                            하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("공동체 삭제 하기 누름")}>
                        <Text style={{color: "#FF6D6D", fontSize: 16, fontWeight: "bold", marginTop: 10}}>공동체 삭제
                            하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: "center",
        backgroundColor: "#fff"
    },
})
