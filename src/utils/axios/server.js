import axios from 'axios';
import {baseUrl} from "../api/urls";

const server = axios.create({
    baseURL: baseUrl,
    timeout: 10000
});

server.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log(error.response.data)
        return Promise.reject(error);
    }
);

server.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        alert(error.response.data.message)
        return Promise.reject(error);
    }
);
export default server;
