import './App.css'
import { useState } from 'react';
import SignInPage from './components/SignIn';
import CreateAccount from './components/CreateAccount'
import SignOutButton from './components/SignOut';
import PostView from './components/PostView';
import MessageForm from "./components/MessageForm";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'; 

function App() {
    const [currentForm, currentSetForm] = useState("login");
    const [token, setToken] = useState(sessionStorage.getItem("token"));
  
    const toggleForm = (formName) => {
    currentSetForm(formName);
  };

  return (
    <div className="App">
      <Navbar />
      <AuthProvider>
          <Routes>
            <Route path="/" element={<SignInPage />}/>
            <Route path="/create" element={<CreateAccount />}/>
            <Route path ="/logOut" element ={<SignOutButton />}/>
            <Route path="/posts" element={<PostView />}/> 
            <Route
              path="/profile"
              element={<MessageForm token={token} setToken={setToken} />}
            />
          </Routes>
      </AuthProvider>
    </div>
  )
}
export default App;
