const User = require('../models/user');
const router = require('express').Router();

// login user
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({username});

        if(!user || user.password !== password){
            return res.status(401).json( {message:' user does not exists !'});
        }

        res.status(200).json({ message: 'Login Successfully !', user});
    } catch (error) {
        res.status(500).json({ message: 'internal server error', error: err.message });
    }
    console.log('login payload: ', req.body);
    console.log('User in DB: ', username);
    
});


module.exports = router;