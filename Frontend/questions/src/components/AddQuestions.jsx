import React, { useState } from 'react'
import axios from 'axios'

const AddQuestions = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    // let url = 'http://localhost:5000/api/questions';
    const handleSubmit = async (e)=> {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_URL}/api/questions`, {question, answer});
        setQuestion('');
        setAnswer('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input value = {question} onChange={(e)=> setQuestion(e.target.value)} placeholder='type your question' />
        <input value ={answer} onChange={(e)=> setAnswer(e.target.value)} placeholder='type your answer'/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddQuestions