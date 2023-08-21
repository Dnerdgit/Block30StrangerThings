import { useState, useEffect } from 'react'
// import { RegisterSignInData } from "../API";
// import useLocalStorage from '../hooks/useLocalStorage'
// import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {

        const [username, setUsername] = useState(() => {
            const savedUser = localStorage.getItem("Username");
            const parsedUser = JSON.parse(savedUser);
            return parsedUser || "";
        });
        const [password, setPassword] = useState(() => {
            const savedPass = localStorage.getItem("Password");
            const parsedPass = JSON.parse(savedPass);
            return parsedPass || "";
        });
        const [confirmPass, setConfirmPass] = useState("");
        const [error, setError] = useState(null);

        // const navigate = useNavigate();

    


        useEffect(() => {
            localStorage.setItem('Username', JSON.stringify(username));
            localStorage.setItem('Password', JSON.stringify(password));
            localStorage.setItem('Confirm', JSON.stringify(confirmPass));

            }, [username, password]
            
        )

        const handleSubmit = async (event) => {
        event.preventDefault();

    //     const newProfile = await RegisterSignInData(username, password, acceptPass);

    //     if (password !== setAcceptPass) {
    //         return;
    //     }
            
    //     console.log(newProfile);
    //     if (newProfile.success) {


    //         console.log("New User: ", newProfile.data.posts);

    //         const newProfileList = [...posted, newProfile.data.posts];
    //         setPosted(newProfileList);

    //         setUsername(username);
    //         setPassword(password);
    //         setAcceptPass(acceptPass);
    //     } else {
    //         setError(error);
    //     }
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
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
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
                    placeholder="**********"
                    onChange={(event) => setPassword(event.target.value)}
                    />
                
                    <br/>
                    <br/>
                <label>
                    Confirm Password
                </label>
                <input
                    id="confirmPass"
                    type="password"
                    name="confirmPass"
                    value={confirmPass}
                    placeholder="**********"
                    onChange={(event) => setConfirmPass(event.target.value)}
                    />

                    <br/>
                    <br/>
                    <button onClick={(() => (setConfirmPass(password) ))}>Submit</button>
            </form>
        </div>

        )
    }

// (setPassword === password) ? 'Login Accepted' : password
