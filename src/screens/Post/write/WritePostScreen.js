import SafeAreaView from "../../../components/common/SafeAreaView/SafeAreaView";
import Header from "../../../components/common/Header/Header";
import {ScrollView, StyleSheet, View} from "react-native";
import UploadImgContent from "../../../components/common/UploadImgContent/UploadImgContent";
import TextArea from "../../../components/common/TextArea/TextArea";
import InputFrame from "../../../components/common/InputFrame/InputFrame";
import {useState} from "react";
import BasicInput from "../../../components/common/BasicInput/BasicInput";

export default function WritePostScreen() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header
                    title="가티 글 쓰기"
                    buttonText="완료"
                    buttonOnPress={() => {
                    }}
                />
                <ScrollView>
                    {/* 사진 */}
                    {/* 클릭 이벤트 넣어줘야 함 */}
                    <UploadImgContent/>
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
                        title="글 쓰기"
                        child={
                            <TextArea
                                value={content}
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
})
