
import User from '../models/User.js';

const UserService = () => {

    const findAll = async () => {
        return await User.find();
    }

    const findById = async (id) => {
        return await User.findOne({ _id: id });
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
        findAll,
        findById,
        create,
        update,
        remove
    }
}

export default UserService();
