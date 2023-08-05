
import Task from '../models/Task.js';

const TaskService = () => {

    const findAll = async () => {
        return await Task.find();
    }

    const findById = async (id) => {
        return await Task.findOne({ _id: id });
    }

    const create = async (task) => {
        return await Task.create(task);
    }

    const update = async (task) => {
        return await Task.updateOne({ _id: task.id }, task);
    }

    const remove = async (id) => {
        return await Task.deleteOne({ _id: id });
    }

    return {
        findAll,
        findById,
        create,
        update,
        remove
    }
}

export default TaskService();
