
import Task from '../models/Task.js';
import ProjectService from './ProjectService.js';

const TaskService = () => {

    const create = async (description, projectId) => {
        const task = await Task.create({description: description, project: projectId});
        await ProjectService.addTask(projectId, task._id); 
        return task;
    }

    const finish = async (id) => {
        const task = await Task.findByIdAndUpdate({ _id: id }, {finishedAt: Date.now()});
        await ProjectService.finishTask(task.project, id);
    }

    const remove = async (taskId, projectId) => {
        await ProjectService.removeTask(projectId, taskId);
        return await Task.deleteOne({ _id: taskId });
    }

    const removeMany = async (projectId) => {
        return await Task.deleteMany({ project: projectId });
    }

    return {
        create,
        finish,
        remove,
        removeMany
    }
}

export default TaskService();
