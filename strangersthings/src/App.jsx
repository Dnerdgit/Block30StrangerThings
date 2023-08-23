// import HOMEPAGE HERE!
import CreateAccount from './components/CreateAccount'
import SignInPage from './components/SignIn';
// import SIGN OUT Page
// import POST HERE!
// import NAV BAR

import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      
        <Routes>
          {/* <Route path='/' element={</>}/> ADD HOMEPAGE ELEMENT HERE*/}   
          <Route path="/create" element={<CreateAccount />}/>
          <Route path="/signin" element={<SignInPage />}/>
          {/* <Route path ="/signout" element ={<SignOut />}/> */}
          {/* <Route path="/posts" element={< />}/> ADD POSTs ELEMENT HERE (add more if needed)*/}
        </Routes>
     
    </>
  )
}

export default App
