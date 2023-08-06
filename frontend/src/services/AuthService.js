
import axios from "axios";

import Config from '../config/Config';

const SERVER_URL = Config.serverUrl;

const AuthService = () => {

    const login = async (credentials) => {
        return (await axios.post(`${SERVER_URL}/login`, credentials)).data.payload;
    }

    const register = async (data) => {
        return (await axios.post(`${SERVER_URL}/register`, data)).data;
    }

    return {
        login,
        register,
    }
}

export default AuthService();
