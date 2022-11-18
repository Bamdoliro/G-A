import {ScrollView, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

import NumberInput from "../components/common/NumberOfPeopleInput/NumberOfPeopleInput";
import UploadImgContent from "../components/common/UploadImgContent/UploadImgContent";
import TextArea from "../components/common/TextArea/TextArea";
import Header from "../components/common/Header/Header";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import InputFrame from "../components/common/InputFrame/InputFrame";
import PublicScopeArea from "../components/Community/create/PublicScopeArea";

export default function ProduceCommunityScreen({navigation}) {

    const [isPublic, setIsPublic] = useState(true);
    const [numberOfPeople, setNumberOfPeople] = useState("25");
    const [introduction, setIntroduction] = useState("")

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header
                    title="공동체 생성"
                    buttonText="완료"
                    buttonOnPress={() => {
                    }}
                />
                <ScrollView>
                    {/* 사진 */}
                    {/* 클릭 이벤트 넣어줘야 함 */}
                    <UploadImgContent/>
                    <InputFrame
                        title="이름"
                        child={
                            <TextInput
                                style={styles.nameInput}
                            />
                        }
                    />
                    <InputFrame
                        title="공개/비공개 설정"
                        child={
                            <PublicScopeArea
                                isPublic={isPublic}
                                setIsPublic={setIsPublic}
                            />
                        }
                    />
                    <InputFrame
                        title="인원수"
                        child={
                            <NumberInput
                                setNumberOfPeople={setNumberOfPeople}
                                isNumberOfPeople={numberOfPeople}
                            />
                        }
                    />
                    <InputFrame
                        title="공동체 소개"
                        child={
                            <TextArea
                                setContent={setIntroduction}
                            />
                        }
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: "#fff",
    },
    nameInput: {
        borderBottomWidth: 2,
        borderColor: "#0D76FF",
        height: 28,
        fontSize: 18
    },
})
