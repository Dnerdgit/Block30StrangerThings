import React, { useState } from "react";
import MessageForm from "./components/MessageForm";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [currentForm, currentSetForm] = useState("login");
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const toggleForm = (formName) => {
    currentSetForm(formName);
  };

    const [token, setToken] = useState(null);

  return (
    <>
<<<<<<< HEAD
      <PostView token={token}/>
=======
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/profile"
            element={<MessageForm token={token} setToken={setToken} />}
          />
        </Routes>
      </div>
>>>>>>> main
    </>
  );
}
export default App;
