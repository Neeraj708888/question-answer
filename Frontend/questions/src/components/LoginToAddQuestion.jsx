import React from 'react'
import Answers from '../components/AnswersList';
import {useNavigate} from 'react-router-dom';

const LoginToAddQuestion = () => {

    const navigate = useNavigate();
    
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center font-semibold mb-4">All Questions</h2>
      <Answers /> {/* This shows your list of questions */}

      <div className="text-center mt-6">
        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => navigate('/login')}>
         Login to Add Question
        </button>
      </div>
    </div>
  )
}

export default LoginToAddQuestion