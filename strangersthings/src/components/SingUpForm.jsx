import React, { useState } from "react";

// const COHORT_NAME = "2209-FTB-ET-WEB-FT";
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export default function SingUp (props) {
  // useState Hook captures the values of what users put on our form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  // handleSubmit captures when user submits a form
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    try {
      const response = await fetch(
        `${BASE_URL}/users/login`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: "superman27",
            password: "krypt0n0rbust",
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="form-container">
      <div className="backdrop-container"></div>
      <h2>Create Account</h2>

      <form className="singUp-form" onSubmit={handleSubmit}>
        {/* Name  */}
        <label htmlFor="name"> Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Your Name"
          id="name"
        />

        {/* Username  */}
        <label htmlFor="username"> Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Type username..."
          id="username"
        />

        {/* Password  */}
        <label htmlFor="password"> Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
        />

        {/* Submit button */}
        <button>Submit</button>
      </form>
      {/* Login button */}
      <button
        className="link-Button"
        onClick={() => props.onFormSwitch("login")}
      >
        Back to Login
      </button>
    </div>
  );
}

