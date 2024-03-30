import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if
        (
        !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
    ) {
       next({ statusCode: 400, message: 'All fields are required' });
    }

      const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });
    try {
        await newUser.save();
        res.json({ message: 'User created successfully' });


    } catch (error) {
        next(error);
    }

}