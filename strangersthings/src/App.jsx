// import HOMEPAGE HERE!
import CreateAccount from './components/CreateAccount'
import SignInPage from './components/SignIn';
// import POST HERE!
import { Routes, Route } from 'react-router-dom'
import './App.css'

// const COHORT = "2302-ACC-CT-WEB-PT-A"
// const BASE_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/`

function App() {
  

  return (
    <>
      
        <Routes>
          {/* <Route path='/' element={</>}/> ADD HOMEPAGE ELEMENT HERE*/}   
          <Route path="/create" element={<CreateAccount />}/>
          <Route path="/sign" element={<SignInPage />}/>
          {/* <Route path="/posts" element={< />}/> ADD POSTs ELEMENT HERE (add more if needed)*/}
        </Routes>
     
    </>
  )
}

export default App
