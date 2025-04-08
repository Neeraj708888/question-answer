import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnswersList = () => {
  const [answerList, setAnswerList] = useState([]);

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.get(`${api}/api/questions`);
        setAnswerList(response.data);
      } catch (error) {
        console.error("Failed to fetch answers:", error);
      }
    };

    fetchAnswers();
  }, [api]);

  return (
    <div>
      <ul>
        {answerList.map((ans, index) => (
          <li key={index}>
            <strong>{ans.question}</strong>: {ans.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswersList;
