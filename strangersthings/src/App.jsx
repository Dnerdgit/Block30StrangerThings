import './App.css'
import { useState } from 'react';
import SignInPage from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import SignOutButton from './components/SignOut';
// import POSTs HERE!
// import NAV BAR
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/Authenticate';



function App() {

  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<SignInPage />}/>
          <Route path="/create" element={<CreateAccount />}/>
          <Route path ="/signout" element ={<SignOutButton />}/>
          {/* <Route path="/posts" element={< />}/>  */}
        </Routes>
     
    </AuthProvider>
  )
}

export default App
