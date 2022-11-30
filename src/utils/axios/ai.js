import axios from 'axios';
import {aiUrl} from "../api/urls";

const ai = axios.create({
    baseURL: aiUrl,
    timeout: 10000
});

ai.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log(error.response.data)
        return Promise.reject(error);
    }
);

ai.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        alert(error.response.data.message)
        return Promise.reject(error);
    }
);
export default ai;
