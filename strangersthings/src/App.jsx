import SignInPage from './components/SignIn';
import CreateAccount from './components/CreateAccount'
// import SignOutButton from './components/SignOut';
// import POSTs HERE!
// import NAV BAR
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { AuthProvider } from './components/Authenticate';
// import { AuthProvider } from 'react-auth-kit';

function App() {

  return (
    // <AuthProvider>
      
        <Routes>
          <Route path="/" element={<SignInPage />}/>
          <Route path="/create" element={<CreateAccount />}/>
          {/* <Route path ="/signout" element ={<SignOutButton />}/> */}
          {/* <Route path="/posts" element={< />}/> ADD POSTs ELEMENT HERE (add more if needed)*/}
        </Routes>
     
    // </AuthProvider>
  )
}

export default App
