import { useState, useEffect } from 'react'
import { RegisterSignInData } from "../API";

export default function CreateAccount({ posted, setPosted }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [acceptPass, setAcceptPass] = useState("");
    const [error, setError] = useState(null);

    //     const getUser = JSON.parse(localStorage.getItem("user"))
    //     const getPass = JSON.parse(localStorage.getItem("pass"))


    useEffect(() => {
        // console.log(username);
        // console.log(password);
        localStorage.setItem('user', JSON.stringify(username));
        localStorage.setItem('pass', JSON.stringify(password));
        localStorage.setItem('aPass', JSON.stringify(acceptPass));

        }, [username, password]
        
     )

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const newProfile = await RegisterSignInData(username, password, acceptPass);
        
      console.log(newProfile);
      if (newProfile) {
        console.log("New User: ", newProfile.data.posts);

        const newProfileList = [...posted, newProfile.data.posts];
        setPosted(newProfileList);

        setUsername(username);
        setPassword(password);
        setAcceptPass(acceptPass);
      } else {
        setError(error);
      }
   }
  return (

    <div className="signInApp">
        {error && <p>{error}</p>}
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className='sign-up-form'>
            <label>
                Username 
            </label>
            <input
                id="name"
                type="text"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            
                <br/>
                <br/>
            <label>
                Password 
            </label>
            <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            
                <br/>
                <br/>
            <label>
                Confirm Password
            </label>
            <input
                id="acceptPass"
                type="password"
                name="acceptPass"
                value={acceptPass}
                onChange={(e) => setAcceptPass(e.target.value)}
                />

                <br/>
                <br/>
                <button onClick={(() => (setAcceptPass(password) ))}>Continue</button>
        </form>
    </div>

    )
}

// (setPassword === password) ? 'Login Accepted' : password
