
import axios from "axios";

import Config from '../config/Config';

const SERVER_URL = `${Config.serverUrl}/tasks`;

const TaskService = () => {
    
    const createTask = async (projectId, description) => {
        return (await axios.post(`${SERVER_URL}/${projectId}`, {description: description})).data.payload;
    }
    
    const finishTask = async (id) => {
        return (await axios.put(`${SERVER_URL}/finish/${id}`)).data.payload;
    }

    const deleteTask = async (id) => {
        await axios.delete(`${SERVER_URL}/${id}`);
    }

    return {
        createTask,
        finishTask,
        deleteTask,
    }
}

export default TaskService();
