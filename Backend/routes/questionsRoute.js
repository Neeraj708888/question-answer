const express = require('express');
const question = require('../models/Question');
const router = express.Router();

// add Question
router.post('/', async (req, res) => {
    try {
        const newQuestion = await new question(req.body).save();
        res.json(newQuestion);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// get ALl Questions
router.get('/', async (req, res)=> {
    const questions = await question.find();
    res.json(questions);
})

module.exports = router;