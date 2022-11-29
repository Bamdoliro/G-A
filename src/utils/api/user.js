import server from "../axios/server.js";
import {authorization} from "../config/authorization";

export const join = async ({email, password, name, gender, birthYear, birthMonth, birthDay}) => {
    return (await server.post('/user', {
        email: email,
        password: password,
        name: name,
        gender: gender,
        birthYear: birthYear,
        birthMonth: birthMonth,
        birthDay: birthDay
    }));
}

export const getUserInformation = async () => {
    return (await server.get('/user', await authorization())).data;
}
