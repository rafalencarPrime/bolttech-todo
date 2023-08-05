
import axios from "axios";

const backend_url = 'http://localhost:4000/tasks';

const TaskService = () => {
    
    const createTask = async () => {
        return (await axios.post(backend_url)).data.payload;
    }
    
    const updateTask = async (task) => {
        return (await axios.put(`${backend_url}/${task.id}`, task)).data.payload;
    }

    const deleteTask = async (task) => {
        await axios.delete(`${backend_url}/${task.id}`);
    }

    return {
        createTask,
        updateTask,
        deleteTask,
    }
}

export default TaskService();
