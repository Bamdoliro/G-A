import {authorization} from "../config/authorization";
import server from "../axios/server";

export const getMyCommunity = async () => {
    return (await server.get('/community/my', await authorization())).data;
}

export const getCommunityDetail = async (id) => {
    return (await server.get(`/community/${id}`, await authorization())).data;
}
