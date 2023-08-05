
import express from 'express';

const router = express.Router()

router.post('/login', async (req, res) => {
    
    try {
        res.status(200).json({message: "Login success"});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Login failed"});
    }

})

router.post('/logout', async (req, res) => {
    
    try {
        res.status(200).json({message: "Logout success"});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Logout failed"});
    }

})

router.post('/register', async (req, res) => {
    
    try {
        res.status(200).json({message: "Register success"});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Register failed"});
    }

})

export default router;
