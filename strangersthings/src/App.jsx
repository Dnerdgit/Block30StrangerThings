import { useState } from "react";
import "./App.css";
import PostView from "./components/PostView";
import Login from "./components/LoginForm";
import SingUp from "./components/SignUpForm";

function App() {
  const [currentForm, currentSetForm] = useState("login");

  const toggleForm = (formName) => {
    currentSetForm(formName);
  };

  return (
    <>
      {" "}
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <SingUp onFormSwitch={toggleForm} />
      )}
      <PostView />
    </>
  );
}

export default App;
