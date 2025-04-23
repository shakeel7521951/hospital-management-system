import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
const PORT = process.env.PORT || 5000;

import userRoute from './routes/userRoutes.js';


const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend is running...");
})


mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB is connected...")
})
.catch((error)=>{
    console.log("Error in connecting DB",error);
})

app.use('/api/v1',userRoute);


app.listen(PORT,()=>{
    console.log(`Server is running at PORT no. ${PORT}`);
})