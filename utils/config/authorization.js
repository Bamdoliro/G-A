import {getAccessToken} from "../storage/token";

export const authorization = async () => {
    const token = await getAccessToken()

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}
