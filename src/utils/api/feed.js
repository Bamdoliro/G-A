import {authorization} from "../config/authorization";
import server from "../axios/server";

export const writeFeed = async ({title, content, communityId}) => {
    return (await server.post('/board', {
        title: title,
        content: content,
        communityId: communityId,
    }, await authorization())).data;
}

export const getFeedsByCommunity = async (communityId) => {
    return ((await server.get(`/board/community/${communityId}`, await authorization()))).data;
}
