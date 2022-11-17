import server from "../axios/server.js";

export const login = async ({email, password}) => {
    return (await server.post('/auth', {
        email: email,
        password: password
    })).data;
}
