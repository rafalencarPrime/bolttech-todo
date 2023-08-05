
import express from 'express';
import ProjectService from '../services/ProjectService.js';

const router = express.Router()

router.get('/', async (req, res) => {
    
    try {
        const data = await ProjectService.findAll(); 
        res.status(200).json({
            message: "Object found",
            data: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not get object"});
    }

})

router.post('/', async (req, res) => {
    
    try {
        const data = await ProjectService.create(req.body); 
        res.status(200).json({
            message: "Object created",
            data: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not create object"});
    }

})

router.put('/:id', async (req, res) => {
    
    try {
        const data = await ProjectService.update(req.params.id, req.body);
        res.status(200).json({
            message: "Object updated",
            data: data
        });   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not update object"});
    }

})

router.delete('/:id', async (req, res) => {
    
    try {
        const data = await ProjectService.remove(req.params.id);
        res.status(200).json({
            message: "Object deleted",
            data: data
        });  
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not delete object"});
    }

})

export default router;
