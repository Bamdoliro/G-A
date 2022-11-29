import SafeAreaView from "../../../components/common/SafeAreaView/SafeAreaView";
import LightHeader from "../../../components/common/header/LightHeader/LightHeader";
import {ScrollView, StyleSheet, View} from "react-native";
import ImageInput from "../../../components/common/input/ImageInput/ImageInput";
import TextArea from "../../../components/common/input/TextArea/TextArea";
import InputFrame from "../../../components/common/frame/InputFrame/InputFrame";
import {useState} from "react";
import BasicInput from "../../../components/common/input/BasicInput/BasicInput";
import {useMutation, useQueryClient} from "react-query";
import {writeFeed} from "../../../utils/api/feed";
import {getCurrentCommunity} from "../../../utils/storage/currentCommunity";
import {useNavigation} from "@react-navigation/native";

export default function WritePostScreen() {
    const navigation = useNavigation();
    const queryClient = useQueryClient();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const {mutate} = useMutation(writeFeed, {
        onSuccess: () => {
            alert('성공')
            navigation.pop();
            queryClient.invalidateQueries('getFeedsByCommunity');
        }
    })

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <LightHeader
                    title="글 쓰기"
                    buttonText="완료"
                    buttonOnPress={async () => mutate({
                        title: title,
                        content: content,
                        communityId: await getCurrentCommunity()
                    })}
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
