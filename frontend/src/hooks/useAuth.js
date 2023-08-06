
import React from 'react';
import axios from 'axios';
import { useState, useContext } from 'react';
import AuthService from '../services/AuthService.js';

const context = React.createContext({});

const AuthContext = ({ children }) => {

    const [auth, setAuth] = useState({});

    const login = async (credentials) => {

        const res = await AuthService.login(credentials);

        if (res.token && res.user) {

            const { token, user } = res;
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };

            const newAuth = {
                user
            }

            setAuth(newAuth);
            return true;
        }
        else {
            logout();
            return false;
        }
    }

    const logout = () => {
        axios.defaults.headers.common = {};
        setAuth({});
        return {};
    }

    return (
        <context.Provider value={{ ...auth, login, logout }}>
            {children}
        </context.Provider>
    )
}

export const useAuth = () => {
    return useContext(context);
}

export default AuthContext;
