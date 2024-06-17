import express from 'express';
import { isAuth } from "../middlewares/isAuth.js";
import { createProduct } from "../controllers/product.js";
import { uploadFiles } from "../middlewares/multer.js";


const router = express.Router();


router.post('/product/new', isAuth, uploadFiles, createProduct);



export default router;