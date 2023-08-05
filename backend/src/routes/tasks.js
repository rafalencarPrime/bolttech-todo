
import express from 'express';
import TaskService from '../services/TaskService.js';

const router = express.Router()

router.get('/', async (req, res) => {
    
    try {
        const data = await TaskService.findAll(); 
        res.status(200).json({
            message: "Object found",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not get object"});
    }

})

router.post('/', async (req, res) => {
    
    try {
        const data = await TaskService.create(req.body); 
        res.status(200).json({
            message: "Object created",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not create object"});
    }

})

router.put('/:id', async (req, res) => {
    
    try {
        const data = await TaskService.update(req.params.id, req.body);
        res.status(200).json({
            message: "Object updated",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not update object"});
    }

})

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
