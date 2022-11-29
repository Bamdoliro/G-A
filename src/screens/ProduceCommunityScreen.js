import {ScrollView, StyleSheet, View} from "react-native";
import {useState} from "react";

import NumberInput from "../components/common/input/NumberOfPeopleInput/NumberOfPeopleInput";
import ImageInput from "../components/common/input/ImageInput/ImageInput";
import TextArea from "../components/common/input/TextArea/TextArea";
import LightHeader from "../components/common/header/LightHeader/LightHeader";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import InputFrame from "../components/common/frame/InputFrame/InputFrame";
import PublicScopeArea from "../components/Community/create/PublicScopeArea";
import BasicInput from "../components/common/input/BasicInput/BasicInput";
import {useMutation} from "react-query";
import {createCommunity} from "../utils/api/community";

export default function ProduceCommunityScreen({navigation}) {
    const [name, setName] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [numberOfPeople, setNumberOfPeople] = useState("25");
    const [introduction, setIntroduction] = useState("")
    const [password, setPassword] = useState(null)
    const {mutate} = useMutation(createCommunity, {
        onSuccess: () => {
            alert('성공')
            navigation.pop()
        }
    })

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <LightHeader
                    title="공동체 생성"
                    buttonText="완료"
                    buttonOnPress={() => mutate({
                        name: name,
                        introduction: introduction,
                        capacity: numberOfPeople,
                        isPublic: isPublic,
                        password: password,
                    })}
                />
                <ScrollView>
                    {/* 사진 */}
                    {/* TODO :: 클릭 이벤트 넣어줘야 함 */}
                    <ImageInput/>
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
                                numberOfPeople={numberOfPeople}
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
