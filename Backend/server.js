require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const questionRoute = require('./routes/questionsRoute');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/questions', questionRoute);

// const url = 'mongodb+srv://amcksharma:neeraj123@cluster0.oevas.mongodb.net/student?retryWrites=true&w=majority';

mongoose.connect(process.env.Mongo_URI)
.then(()=> console.log("Database connected !"))
.catch((err) => console.log(err));

app.listen(5000, ()=> console.log('Server is running on port 5000'));