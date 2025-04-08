const User = require('../models/user');  // import user models and schema
const express = require('express');
const router = express.Router();

// create User
router.post('/', async (req, res)=> { 
    const userExist = await User.findOne({ username: 'neeraj'});
    if(userExist) return res.status(400).json({ message:  'User already exist !'});

    const user = new User(
        {
            username: 'neeraj',
            password: 'neeraj',
        });

        await user.save();
        res.status(201).json({ message: 'User created !' });
});

// // login User
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username: username });
//     if (!user || user.password !== password) {
//         return res.status(401).json({ message: 'Invalid username or password' });
//     }
//     res.status(200).json({ message: 'Login Successfully !'});
// });

module.exports = router;