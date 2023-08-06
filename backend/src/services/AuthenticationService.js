
import UserService from '../services/UserService.js';
import AuthUtils from '../utils/AuthUtils.js';

const AuthenticationService = () => {

    const login = async (user) => {

        const dbUser = await UserService.findByEmail(user.email);
        if (dbUser){
            if (AuthUtils.equals(user.password, dbUser.password)) return AuthUtils.createToken(dbUser._id);
            else throw "Wrong password";
        }
        else throw 'User not found';
    }

    const register = async (user) => {
        const hashedPass = AuthUtils.hash(user.password);
        return await UserService.create({email:user.email, password:hashedPass})
    }

    return {
        login,
        register
    }
}

export default AuthenticationService();
