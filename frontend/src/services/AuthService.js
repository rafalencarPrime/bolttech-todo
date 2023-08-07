
import axios from "axios";

import Config from '../config/Config';

const SERVER_URL = Config.serverUrl;

const AuthService = () => {

    const login = async (credentials) => {
        return (await axios.post(`${SERVER_URL}/login`, credentials)).data.payload;
    }

    const register = async (data) => {
        try {
            return (await axios.post(`${SERVER_URL}/register`, data)).data.success
        } 
        catch (error) {
            return false
        }
    }

    return {
        login,
        register,
    }
}

export default AuthService();
