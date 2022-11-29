import server from "../axios/server.js";
import {authorization} from "../config/authorization";

export const login = async ({email, password}) => {
    return (await server.post('/auth', {
        email: email,
        password: password
    })).data;
}

export const logout = async () => {
    return (await server.delete('/auth', await authorization())).data;
}
