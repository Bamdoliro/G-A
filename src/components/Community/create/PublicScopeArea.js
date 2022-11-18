import Option from "../../common/Option/Option";
import {StyleSheet, View} from "react-native";

export default function PublicScopeArea({isPublic, setIsPublic}) {

    return (
        <View style={styles.container}>
            <Option
                title="공개"
                description="모두가 공동체에 참여 할 수 있습니다!"
                focus={isPublic}
                isPublic={isPublic}
                setIsPublic={setIsPublic}
                style={styles.margin}
            />
            <Option
                title="비공개"
                description="비밀번호를 입력한 후 입장 할 수 있습니다!"
                focus={!isPublic}
                isPublic={isPublic}
                setIsPublic={setIsPublic}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    margin: {
        marginBottom: 8,
    }
})
