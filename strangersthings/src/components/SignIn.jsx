import { useState } from 'react'

export default function SignInPage(token, setToken) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(username, password)
      setUserName(username);
   }

  return (

    <div className="signInApp">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className='sign-up-form'>
            <label>
                Username 
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
                Password 
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
       
                <button onClick={setUserName === username && setPassword === password ? onClick="submit" : username && password}>Sign In</button>
        </form>
    </div>

    )
}
