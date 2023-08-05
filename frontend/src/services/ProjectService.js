
import axios from "axios";

const backend_url = 'http://localhost:4000/projects';

const ProjectService = () => {
    
    const getProjects = async () => {
        return (await axios.get(backend_url)).data.payload;
    }

    const createProject = async (project) => {
        return (await axios.post(backend_url, project)).data.payload;
    }
    
    const updateProject = async (project) => {
        return (await axios.put(`${backend_url}/${project.id}`, project)).data.payload;
    }

    const deleteProject = async (project) => {
        await axios.delete(`${backend_url}/${project.id}`);
    }

    return {
        getProjects,
        createProject,
        updateProject,
        deleteProject,
    }
}

export default ProjectService();
