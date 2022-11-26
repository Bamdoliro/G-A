import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import InputFrame from "../../common/frame/InputFrame/InputFrame";
import BasicInput from "../../common/input/BasicInput/BasicInput";
import {useState} from "react";

export default function ProfileEditSection() {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");

    return (
        <KeyboardAvoidingView
            style={styles.Edit}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <InputFrame
                style={styles.Caption}
                title="닉네임"
                child={
                    <BasicInput
                        style={styles.Input}
                        value={nickname}
                        setValue={setNickname}
                        placeholder="김가티"
                    />
                }
            />
            <View style={styles.passwordInputs}>
                <InputFrame
                    style={styles.Caption}
                    title="현재 비밀번호"
                    child={
                        <BasicInput
                            style={styles.Input}
                            value={password}
                            setValue={setPassword}
                            placeholder="••••••••"
                            secureTextEntry
                        />
                    }
                />
                <InputFrame
                    style={styles.Caption}
                    title="비밀번호 수정"
                    child={
                        <BasicInput
                            style={styles.Input}
                            value={newPassword}
                            setValue={setNewPassword}
                            placeholder="••••••••"
                            secureTextEntry
                        />
                    }
                />
                <InputFrame
                    style={styles.Caption}
                    title="비밀번호 재입력"
                    child={
                        <BasicInput
                            style={styles.Input}
                            value={reNewPassword}
                            setValue={setReNewPassword}
                            placeholder="••••••••"
                            secureTextEntry
                        />
                    }
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    Edit: {
        paddingHorizontal: 30,
        flex: 1
    },
    Caption: {
        fontSize: 12
    },
    passwordInputs: {
        marginTop: 46
    },
    Input: {
        fontSize: 12
    }
})
