import { useState } from 'react'

export default function SignInPage() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(username, password)
      setUserName(username);
//       setPassword(password);
//       setAcceptPass(acceptPass);
   }

  return (

    <div className="signInApp">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className='sign-up-form'>
            <label>
                Username: 
            </label>
            <input
                type="text"
                name="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                id="name"
                />
                <br/>
                <br/>
            <label>
                Password: 
            </label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                />
                <br/>
                <br/>
            {/* <label>
                Confirm Password: 
            </label>
            <input
                type="password"
                name="acceptPass"
                value={acceptPass}
                onChange={(e) => setAcceptPass(e.target.value)}
                id="acceptPass"
                />
                <br/>
                <br/> */}
                <button onClick={(() => (setPassword(password)))}>Continue</button>
        </form>
    </div>

    )
}
