import { useState } from 'react'
import { RegisterSignInData } from "../API";

export default function CreateAccount({ posted, setPosted }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [acceptPass, setAcceptPass] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newProfile = await RegisterSignInData(username, password, acceptPass);
      console.log(newProfile);
      if (newProfile.success) {
        console.log("New User: ", newProfile.data.posts);

        const newProfileList = [...posted, newProfile.data.posts];
        setPosted(newProfileList);

        setUsername(username);
        setPassword(password);
        setAcceptPass(acceptPass);
      } else {
        setError(newProfile.error.message);
      }

    //   setSignInPage();
     
   }
  return (

    <div className="signInApp">
        {error && <p>{error}</p>}
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className='sign-up-form'>
            <label>
                Username 
            <input
                id="name"
                type="text"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
                <br/>
                <br/>
            <label>
                Password 
            <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
                <br/>
                <br/>
            <label>
                Confirm Password 
            <input
                id="acceptPass"
                type="password"
                name="acceptPass"
                value={acceptPass}
                onChange={(e) => setAcceptPass(e.target.value)}
                />
                </label>
                <br/>
                <br/>
                <button onClick={(() => (setAcceptPass(password) ))}>Continue</button>
        </form>
    </div>

    )
}

// (setPassword === password) ? 'Login Accepted' : password
