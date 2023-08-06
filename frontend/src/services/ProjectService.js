
import axios from "axios";

const backend_url = 'http://localhost:4000/projects';

const ProjectService = () => {
    
    const getProjects = async () => {
        return (await axios.get(backend_url)).data.payload;
    }

    const createProject = async (name) => {
        return (await axios.post(backend_url, {name: name})).data.payload;
    }
    
    const changeProjectName = async (id, name) => {
        return (await axios.put(`${backend_url}/${id}`, {name: name})).data.payload;
    }

    const deleteProject = async (id) => {
        await axios.delete(`${backend_url}/${id}`);
    }

    return {
        getProjects,
        createProject,
        changeProjectName,
        deleteProject,
    }
}

export default ProjectService();
