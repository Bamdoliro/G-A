import server from "../axios/server.js";
import {authorization} from "../config/authorization";
import ai from "../axios/ai";

export const getMessages = async (id) => {
    return (await server.get(`/chat/${id}?sort=id,desc`, await authorization())).data;
}

export const getRooms = async () => {
    return (await server.get('/chat', await authorization())).data;
}

export const getAIMessage = async (message) => {
    return (await ai.get('/', {
        params: {
            msg: message
        }
    }));
}
