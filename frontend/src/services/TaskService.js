
import axios from "axios";

const backend_url = 'http://localhost:4000/tasks';

const TaskService = () => {
    
    const createTask = async (projectId, description) => {
        return (await axios.post(`${backend_url}/${projectId}`, {description: description})).data.payload;
    }
    
    const finishTask = async (id) => {
        return (await axios.put(`${backend_url}/finish/${id}`)).data.payload;
    }

    const deleteTask = async (id) => {
        await axios.delete(`${backend_url}/${id}`);
    }

    return {
        createTask,
        finishTask,
        deleteTask,
    }
}

export default TaskService();
