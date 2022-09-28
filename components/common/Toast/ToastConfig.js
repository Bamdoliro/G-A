import ChatNotificationToast from "../../Chat/ChatLive/Notification/ChatNotificationToast";

export const toastConfig = {
    chatNotification: internalState => (
        <ChatNotificationToast
            text1={internalState.text1}
            text2={internalState.text2}
        />
    )
}
