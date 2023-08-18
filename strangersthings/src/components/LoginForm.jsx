import React, { useState } from "react";

const COHORT_NAME = "2209-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Login(props) {
  // useState Hook captures the values of what users put on our form.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      setError(error.message);
    }
  }

  return (
    <div className="form-container">
      <h2>Welcome Back</h2>
      <form className="login-container" onSubmit={handleSubmit}>
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

        {/* Login button */}
        <button>Log In</button>
      </form>
      {/* Registration button */}
      <button
        className="link-Button"
        onClick={() => props.onFormSwitch("SingUp")}
      >
        Don't have an account? Sing up
      </button>
    </div>
  );
}
