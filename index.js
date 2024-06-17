import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';


dotenv.config();

const app = express();
const port = process.env.PORT;

//using middleware
app.use(express.json());


// import routes
import userRoutes from './routes/user.js';
import productRoutes from './routes/product.js';
//using routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);


app.use("/uploads", express.static("uploads")); //  this will help us to fetch image from server url


app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
    connectDb();
});