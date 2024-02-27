import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/user.router.js';

dotenv.config();

// Connect to MongoDB
mongoose.
connect(process.env.MONOGO)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
})
   


const app = express();
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use('/api/user', userRouter);