
import Project from '../models/Project.js';
import TaskService from './TaskService.js';

const ProjectService = () => {

    const findByUser = async (userId) => {
        return await Project.find({ user: userId}).populate('todo done');
    }

    const create = async (project) => {
        return await Project.create(project);
    }

    const changeName = async (id, name) => {
        return await Project.findByIdAndUpdate({ _id: id }, { name: name });
    }

    const addTask = async (id, taskId) => {
        return await Project.findByIdAndUpdate({ _id: id }, { $push: { todo: taskId } });
    }

    const removeTask = async (id, taskId) => {
        return await Project.findByIdAndUpdate({ _id: id }, { $pull: { todo: taskId } });
    }

    const finishTask = async (id, taskId) => {
        await Project.updateOne({ _id: id }, { $pull: { todo: taskId } });
        return await Project.findByIdAndUpdate({ _id: id }, { $push: { done: taskId } });
    }

    const remove = async (id) => {
        await TaskService.removeMany(id);
        return await Project.deleteOne({ _id: id });
    }

    return {
        findByUser,
        create,
        changeName,
        addTask,
        removeTask,
        finishTask,
        remove
    }
}

export default ProjectService();
