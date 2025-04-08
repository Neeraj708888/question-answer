import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddQuestions = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [success , setSuccess] = useState('');
    const [error, setError] = useState('');
    const [lastQuestion, setLastQuestion] = useState(null);
    const [lastAnswer, setLastAnswer] = useState(null);

     // effect is auto hide after 3 second message
     useEffect(()=> {
      if(success) {
        const timer = setTimeout (()=> setSuccess(''), 3000);
        return ()=> clearTimeout(timer);
      }
    }, [success]);
    

    // let url = 'http://localhost:5000/api/questions';
    const api = import.meta.env.VITE_API_URL;
    const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
          const res = await axios.post(`${api}/api/questions`, {question, answer});
          console.log(res.data); // post successfully 
          setSuccess('✅ Question added successfully!');
          setLastQuestion(res.data.question|| question);
          setLastAnswer(res.data.answer || answer); 
           
          setQuestion('');
          setAnswer(''); 

        } catch (error) {
          console.log("Error: ", error.message);
          setError(error.message);
          setLastAnswer(null);
          setLastQuestion(null);
        }
    }

  return (
  
    <form onSubmit={handleSubmit}
    className='min-h-screen text-red-500 flex flex-col w-84 mt-4 gap-4 justify-center m-auto bg-green-100'>
    <h2 className='text-green-800 text-center text-3xl mt-4'>Add Quetions</h2>

    {/* showing success message */}
      {
        success && (
          <div className='text-center text-green-700 bg-green-200 p-2 rounded'>
          {success}
          </div>
        )
      }

        <input 
        value = {question} 
        onChange={(e)=> setQuestion(e.target.value)} 
        placeholder='type your question'
        className='border p-2 text-center shadow' />
        <input 
        value ={answer} 
        onChange={(e)=> setAnswer(e.target.value)} 
        placeholder='type your answer'
        className='border p-2 text-center shadow'
        />
        <button type='submit'>Add</button>

        {/* Show last added question */}
        <div className='flex flex-col'>
        <p className='text-center text-lg text-green-800 mt-4'>
          Question: <strong>{lastQuestion}</strong>
        </p>
        <p className='text-center text-lg text-green-800 mt-4'>
          Answer: <strong>{lastAnswer}</strong>
        </p>
        {error && (
          <p>{error}</p>
        )}
        </div>
    </form>
  )
}

export default AddQuestions;