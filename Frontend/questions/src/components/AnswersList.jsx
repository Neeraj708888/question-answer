import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AnswersList = () => {

  const [answerList, setAnswerList] = useState([]);

  // let url = 'http://localhost:5000/api/questions';
  useEffect(()=> {
    axios.get(`${process.env.REACT_APP_URL}/api/questions`)
    .then((data) => setAnswerList(data.data));
  }, []);
  return (
    <div>
      <h2>All Questions</h2>
      <ul>
          {answerList.map((ans, index)=> (
            <li key={index}><strong>{ans.question}</strong>: {ans.answer}</li>
          ))}
      </ul>
    </div>
  )
}

export default AnswersList;