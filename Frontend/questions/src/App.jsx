
// import { useState } from 'react';
import AddQuestions from './components/AddQuestions'
import LoginToAddQuestion from './components/LoginToAddQuestion';
import UserLogin from './components/UserLogin';

// function App() {

//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <>
//       <div>
//         {!loggedIn ? (<UserLogin onLoginSuccess = {()=> setLoggedIn(true)} />) : <AddQuestions/> }
//         {/* <Answers/> */}
//       </div>
//     </>
//   )
// }

// export default App;

// 2nd Way

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<LoginToAddQuestion />} />
        <Route path='/login' element= {<UserLogin />} />
        <Route path='/login/question' element= {<AddQuestions />}/>
      </Routes>
    </Router>
  )
}

export default App;