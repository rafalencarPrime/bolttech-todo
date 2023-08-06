
import express from 'express';
import TaskService from '../services/TaskService.js';

const router = express.Router()

// Create new task in todo
router.post('/:projectId', async (req, res) => {
    
    try {
        const data = await TaskService.create(req.body.description, req.params.projectId);
        res.status(200).json({
            message: "Object created",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not create object"});
    }

})

// Finish task
router.put('/finish/:id', async (req, res) => {
    
    try {
        const data = await TaskService.finish(req.params.id);
        res.status(200).json({
            message: "Object updated",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not update object"});
    }

})

// Remove task if it's in todo
router.delete('/:id', async (req, res) => {
    
    try {
        const data = await TaskService.remove(req.params.id);
        res.status(200).json({
            message: "Object deleted",
            payload: data
        });  
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not delete object"});
    }

})

export default router;
