import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const UserLogin = ({onLoginSuccess}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    // const url = 'http://localhost:5000/api/user/login'
    const api = import.meta.env.VITE_API_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
             // Here you can call your API to login the user
        const res = await axios.post(`${api}/api/user/login`, {username, password});
        console.log(res.data); // login success
        // onLoginSuccess(); // call where u can login successfully
        navigate('login/question');
        } catch (error) {
            console.log('Login failed..', error.message?.data?.message || error.message);
            
        }
       
        setUsername('');
        setPassword('');
    }

  return (
    <form onSubmit={handleSubmit} className='min-h-screen text-red-500 flex flex-col w-84 mt-4 gap-4 justify-center m-auto bg-green-100'>
    <input 
    value = {username} 
    placeholder='username' 
    onChange={(e)=> setUsername(e.target.value)}
    className='border p-2 text-center shadow' />
    <input 
    value = {password} 
    placeholder='password' 
    onChange={(e)=> setPassword(e.target.value)}
    className='border p-2 text-center shadow'
    /> 
    <button type = 'submit'
    className='border p-2'>Add</button>
    </form>
  )
}

export default UserLogin;