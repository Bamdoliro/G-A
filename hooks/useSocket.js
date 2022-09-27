import {useEffect, useRef} from "react";
import io from "socket.io-client";
import {socketUrl} from "../api/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSocket = () => {
    const socketRef = useRef();

    const connectSocketIO = async () => {
        const token = await AsyncStorage.getItem("access-token")

        if (token) {
            socketRef.current = io.connect(socketUrl, {
                transports: ["websocket"],
                cors: {
                    origin: "*",
                },
                query: {
                    authorization: token,
                },
            });
        }

    }

    useEffect(() => {
        connectSocketIO();
    }, [socketRef]);

    return socketRef;
}

export default useSocket;
