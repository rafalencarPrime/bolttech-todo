
import Project from '../models/Project.js';

const ProjectService = () => {

    const findAll = async () => {
        return await Project.find();
    }

    const findById = async (id) => {
        return await Project.findOne({ _id: id });
    }

    const create = async (project) => {
        return await Project.create(project);
    }

    const update = async (project) => {
        return await Project.updateOne({ _id: project.id }, project);
    }

    const remove = async (id) => {
        return await Project.deleteOne({ _id: id });
    }

    return {
        findAll,
        findById,
        create,
        update,
        remove
    }
}

export default ProjectService();
