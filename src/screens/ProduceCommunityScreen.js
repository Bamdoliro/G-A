import {ScrollView, StyleSheet, View} from "react-native";
import {useState} from "react";

import NumberInput from "../components/common/NumberOfPeopleInput/NumberOfPeopleInput";
import UploadImgContent from "../components/common/UploadImgContent/UploadImgContent";
import TextArea from "../components/common/TextArea/TextArea";
import Header from "../components/common/Header/Header";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import InputFrame from "../components/common/InputFrame/InputFrame";
import PublicScopeArea from "../components/Community/create/PublicScopeArea";
import BasicInput from "../components/common/BasicInput/BasicInput";

export default function ProduceCommunityScreen({navigation}) {
    const [name, setName] = useState("");
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
                            <BasicInput
                                value={name}
                                setValue={setName}
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
                                content={introduction}
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
})
