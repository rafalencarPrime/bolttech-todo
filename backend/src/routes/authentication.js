
import express from 'express';

import AuthencticationService from '../services/AuthenticationService.js';

const router = express.Router()

router.post('/login', async (req, res) => {
    
    try {
        const data = await AuthencticationService.login(req.body);
        res.status(200).json({
            message: "Login success",
            payload: data
        });   
    }
    catch(e) {
        res.status(500).json({message: `Error: Login failed ${e}`});
    }

})

router.post('/register', async (req, res) => {
    
    try {
        await AuthencticationService.register(req.body);
        res.status(200).json({message: "Register success", success: true});   
    }
    catch(e) {
        res.status(500).json({message: "Error: Register failed", success: false});
    }
})

export default router;
