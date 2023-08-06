
import express from 'express';
import ProjectService from '../services/ProjectService.js';

const router = express.Router()

// Get all projects from that user
router.get('/', async (req, res) => {
    
    try {
        const data = await ProjectService.findByUser(req.user.id); 
        res.status(200).json({
            message: "Object found",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not get object"});
    }

})

// Create new project for the user
router.post('/', async (req, res) => {
    
    try {
        req.body.user = req.user.id;
        const data = await ProjectService.create(req.body); 
        res.status(200).json({
            message: "Object created",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not create object"});
    }

})

// Change name of the project
router.put('/changeName/:id', async (req, res) => {
    
    try {
        const data = await ProjectService.changeName(req.params.id, req.body.name);
        res.status(200).json({
            message: "Object updated",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not update object"});
    }

})

// Delete project
router.delete('/:id', async (req, res) => {
    
    try {
        const data = await ProjectService.remove(req.params.id);
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
