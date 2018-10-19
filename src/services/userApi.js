import { baseUrl } from '../configs';
import { request } from './index';


export const userSignUp = async ({ Name, Email, Password }) => {
    const url = `${baseUrl}/register`;

    const data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name, Email, Password })
    }
    return await request(url, data);

}


export const userData = async () => {
    const url = `${baseUrl}/2`;

    const data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return await request(url, data);

}

export const userSignIn = async ({ Login_Email, Login_Password }) => {
    const url = `${baseUrl}/login`;
    console.log("Login_Email " + Login_Email)
    const data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email : Login_Email, Password : Login_Password })
    }
    return await request(url, data);

}

