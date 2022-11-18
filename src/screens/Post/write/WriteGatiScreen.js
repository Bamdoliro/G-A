import SafeAreaView from "../../../components/common/SafeAreaView/SafeAreaView";
import LightHeader from "../../../components/common/header/LightHeader/LightHeader";
import {ScrollView, StyleSheet, View} from "react-native";
import ImageInput from "../../../components/common/input/ImageInput/ImageInput";
import TextArea from "../../../components/common/input/TextArea/TextArea";
import InputFrame from "../../../components/common/frame/InputFrame/InputFrame";
import NumberInput from "../../../components/common/input/NumberOfPeopleInput/NumberOfPeopleInput";
import {useState} from "react";
import BasicInput from "../../../components/common/input/BasicInput/BasicInput";
import PeriodInput from "../../../components/common/input/PeriodInput/PeriodInput";
import FrameInput from "../../../components/common/input/FrameInput/FrameInput";

export default function WriteGatiScreen({navigation}) {
    const [title, setTitle] = useState("");
    const [period, setPeriod] = useState({
        startDate: new Date(),
        endDate: new Date(),
    })
    const [numberOfPeople, setNumberOfPeople] = useState("25");
    const [content, setContent] = useState("")

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <LightHeader
                    title="가티 글 쓰기"
                    buttonText="완료"
                    buttonOnPress={() => {
                    }}
                />
                <ScrollView>
                    {/* 사진 */}
                    {/* 클릭 이벤트 넣어줘야 함 */}
                    <ImageInput/>
                    <InputFrame
                        title="제목"
                        child={
                            <BasicInput
                                value={title}
                                setValue={setTitle}
                            />
                        }

                    />
                    <InputFrame
                        title="가티 기간"
                        child={
                            <PeriodInput
                                period={period}
                                setPeriod={setPeriod}
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
                        title="글 쓰기"
                        child={
                            <TextArea
                                content={content}
                                setContent={setContent}
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
    },
    item: {
        color: "#999",
        fontWeight: "bold",
        fontSize: 20,
    }
})
