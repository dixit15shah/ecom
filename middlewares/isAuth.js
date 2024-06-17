import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        
        if (!token)
            return res.status(403).json({
                message: "Please Login",
            });
            
        const decodedData  = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decodedData.id);
        
        next();
    
    } catch (error) {
        res.status(401).json({
            message: 'Please Login'
        });
    }
}