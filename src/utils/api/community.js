import {authorization} from "../config/authorization";
import server from "../axios/server";

export const getMyCommunity = async () => {
    return (await server.get('/community/my', await authorization())).data;
}

export const getCommunityDetail = async (id) => {
    return (await server.get(`/community/${id}`, await authorization())).data;
}

export const createCommunity = async ({name, introduction, capacity, isPublic, password}) => {
    return (await server.post('/community', {
        name: name,
        introduction: introduction,
        capacity: capacity,
        isPublic: isPublic,
        password: password,
    }, await authorization()))
}
