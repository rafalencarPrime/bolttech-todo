
import mongoose from 'mongoose';

const Types = mongoose.Schema.Types;

const ProjectSchema = mongoose.Schema({

    name: { type: Types.String, unique: true, required: true },
    todo: [ { type: Types.ObjectId, ref: 'Task' } ],
    done: [ { type: Types.ObjectId, ref: 'Task' } ],
    user: { type: Types.ObjectId, ref: 'User' }

})

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
