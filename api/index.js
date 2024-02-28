import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/user.router.js';
import authRouter from './routers/auth.route.js';

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
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);