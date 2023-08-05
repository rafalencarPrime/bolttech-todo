
import mongoose from 'mongoose';

const Types = mongoose.Schema.Types;

const TaskSchema = mongoose.Schema({

    description: { type: Types.String },
    finishedAt: { type: Types.Date },
    project: { type: Types.ObjectId, ref: 'Project' }

}, 
    { timestamps: true }
)

const Task = mongoose.model('Task', TaskSchema);

export default Task;
