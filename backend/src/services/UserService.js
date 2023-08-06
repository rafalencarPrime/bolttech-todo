
import User from '../models/User.js';

const UserService = () => {

    const findByEmail= async (email) => {
        return await User.findOne({ email: email });
    }

    const create = async (user) => {
        return await User.create(user);
    }

    const update = async (id, user) => {
        return await User.updateOne({ _id: id }, user);
    }

    const remove = async (id) => {
        return await User.deleteOne({ _id: id });
    }

    return {
        findByEmail,
        create,
        update,
        remove
    }
}

export default UserService();
