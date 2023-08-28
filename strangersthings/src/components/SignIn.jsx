import { useState } from 'react'
import { SignInData } from "../API";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSessionStorage } from '../hooks/useLocalStorage';
// import { useAuth } from './Authenticate';

export default function SignInPage({token}) {
    const [username, setUsername] = useSessionStorage("username", "");
        useState(() => {
            const savedUser = sessionStorage.getItem("username");
            const parsedUser = JSON.parse(savedUser);
            return parsedUser || "";
        });

    const [password, setPassword] = useSessionStorage("password", "");
        useState(() => {
            const savedPass = sessionStorage.getItem("password");
            const parsedPass = JSON.parse(savedPass);
            return parsedPass || "";
        });

    // const handleAuth = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);
        const response = await SignInData(data.username, data.password);
        
        if (response.success) {
            // handleAuth(true);
            navigate("/posts");
        } else {
            alert("Invalid Entry");
            // handleAuth(false);
        }
   }

  return (

    <div>
        <div className="Welcome">
            <h1>Welcome to Strangers Things</h1>
        </div>

    <div className="signInApp">
        <h2>Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='sign-up-form'>
                <label>
                    Username 
                </label>
                <input 
                {...register("username", {
                    required: true,
                })}
                    type="text"
                    name="name"
                    value={username}
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                    id="name"
                    />
                    {errors.username?.type === 'required' && <p>Invalid Username</p>}
                    <br/>
                    <br/>
                <label>
                    Password 
                </label>
                <input
                {...register("password", {
                    required: true,
                })}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="**********"
                    onChange={(event) => setPassword(event.target.value)}
                    id="password"
                    />
                    {errors.password?.type === 'required' && <p>Invalid Password</p>}
                    <br/>
                    <br/>

                    <button onClick={token} type="submit">Sign In</button>
                    <br/>
                    <a className="make-account" href="/create">Don't have an account. Sign up!</a>
            </form>
        </div>
    </div>
    )
}
