import server from "../axios/server";
import {authorization} from "../config/authorization";
import {dateFormatter} from "../etc/dateTimeFormatter";

export const getDdoByCommunity = async (communityId) => {
    return (await server.get(`/ddo/community/${communityId}`, await authorization())).data;
}

export const writeDdo = async ({title, content, capacity, startDate, endDate, communityId}) => {
    return (await server.post('/ddo', {
        title: title,
        content: content,
        capacity: capacity,
        startDate: dateFormatter(startDate),
        endDate: dateFormatter(endDate),
        communityId: communityId
    }, await authorization())).data;
}
