import CreateAccount from './components/CreateAccount'
import SignInPage from './components/SignIn';
import { Routes, Route } from 'react-router-dom'
import './App.css'

const BASE_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/`

function App() {
  

  return (
    <>
      
        <Routes>
          {/* <Route path='/' element={<></>}/> */}
          <Route path="/create" element={<CreateAccount />}/>
          <Route path="/sign" element={<SignInPage />}/>
        </Routes>
     
    </>
  )
}

export default App
