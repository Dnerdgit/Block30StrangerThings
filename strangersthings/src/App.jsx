import { RegisterSignInData } from './API';
import { CreateAccount } from './components/CreateAccount';
import { SignInPage } from './components/SignIn';
import './App.css'

const BASE_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/`

function App() {
  

  return (
    <>
      
        <Routes>
          <Route path="/" element={<RegisterSignInData />}/>
          <Route path="login" element={<CreateAccount />}/>
          <Route path="sign" element={<SignInPage />}/>
        </Routes>
     
    </>
  )
}

export default App
