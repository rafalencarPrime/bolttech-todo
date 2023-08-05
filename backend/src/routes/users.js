
import express from 'express';
import UserService from '../services/UserService.js';

const router = express.Router()

router.get('/', async (req, res) => {
    
    try {
        const data = await UserService.findAll(); 
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
        const data = await UserService.create(req.body); 
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
        const data = await UserService.update(req.params.id, req.body);
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
        const data = await UserService.remove(req.params.id);
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
