
import axios from "axios";

import Config from '../config/Config';

const SERVER_URL = `${Config.serverUrl}/projects`;

const ProjectService = () => {
    
    const getProjects = async () => {
        return (await axios.get(SERVER_URL)).data.payload;
    }

    const createProject = async (name) => {
        return (await axios.post(SERVER_URL, {name: name})).data.payload;
    }
    
    const changeProjectName = async (id, name) => {
        return (await axios.put(`${SERVER_URL}/${id}`, {name: name})).data.payload;
    }

    const deleteProject = async (id) => {
        console.log(id)
        await axios.delete(`${SERVER_URL}/${id}`);
    }

    return {
        getProjects,
        createProject,
        changeProjectName,
        deleteProject,
    }
}

export default ProjectService();
