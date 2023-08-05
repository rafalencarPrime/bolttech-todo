
import express from 'express';

const router = express.Router()

router.get('/', async (req, res) => {
    
    try {
        res.status(200).json({message: "Object found"});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not get object"});
    }

})

router.post('/', async (req, res) => {
    
    try {
        res.status(200).json({message: "Object created"});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not create object"});
    }

})

router.put('/', async (req, res) => {
    
    try {
        res.status(200).json({message: "Object updated"});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not update object"});
    }

})

router.delete('/', async (req, res) => {
    
    try {
        res.status(200).json({message: "Object deleted"});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Could not delete object"});
    }

})

export default router;
