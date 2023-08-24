import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { RegisterSignInData } from "../API";
import { useLocalStorage } from '../hooks/useLocalStorage';
// import { Link } from 'react-router-dom';
import { useAuth } from './Authenticate';


export default function CreateAccount() {

        const [username, setUsername] = useLocalStorage("Username", "");
        useState(() => {
            const savedUser = localStorage.getItem("Username");
            const parsedUser = JSON.parse(savedUser);
            return parsedUser || "";
        });

        const [password, setPassword] = useLocalStorage("Password", "");
        useState(() => {
            const savedPass = localStorage.getItem("Password");
            const parsedPass = JSON.parse(savedPass);
            return parsedPass || "";
        });

        const [confirmPass, setConfirmPass] = useLocalStorage("Confirm");
        useState(() => {
            const savedConfirm = localStorage.getItem("Confirm");
            const parsedConfirm = JSON.parse(savedConfirm);
            return parsedConfirm || "";
        })
        
        const handleAuth = useAuth();
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm();

        const navigate = useNavigate();

        useEffect(() => {
            localStorage.setItem('Username', JSON.stringify(username));
            localStorage.setItem('Password', JSON.stringify(password));
            localStorage.setItem('Confirm', JSON.stringify(confirmPass));

            }, [username]
        )
        
        // const handleInput = (event) => {
        //     setUsername(prev => ({...prev, [event.target.name] : [event.target.value]}))
        // }
        const onSubmit = async (event) => {
            event.preventDefault();
            // setUsername(username);
            // setPassword(password);
            // setConfirmPass(confirmPass);

            if (password !== setConfirmPass) {
                return;
            }
            const response = await RegisterSignInData(username, password);
            if (response.success) {
                handleAuth(true);
                navigate("/posts");
            } else {
                alert("Invalid Entry");
                handleAuth(false);
            }
        }        
    
    return (

        <div className="signInApp">
        
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='sign-up-form'>
                <label>
                    Username 
                </label>
                <input
                    {...register("Username", {
                        required: true,
                        minLength: 8,
                        maxLength: 12,
                    })} 
                    id="name"
                    type="text"
                    name="name"
                    value={username}
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                    />
                    {errors.username?.type === 'required' && errors.username?.type <= 'minLength' && 
                    <p>Username must be 8 characters min and 12 max.</p>}
                    <br/>
                    <br/>
                <label>
                    Password 
                </label>
                <input
                {...register("Password", {
                    required: true,
                    minLength: 10,
                    maxLength: 20,
                })} 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="**********"
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    {errors.password?.type === 'required' && errors.password?.type <= 'minLength' && 
                    <p>Password must be 10 characters min and 20 max.</p>}
                    <br/>
                    <br/>
                <label>
                    Confirm Password
                </label>
                <input
                    {...register("Confirm", {
                        required: true,
                        minLength: 10,
                        maxLength: 20,
                    })} 
                    id="confirmPass"
                    type="password"
                    name="confirmPass"
                    value={confirmPass}
                    placeholder="**********"
                    onChange={(event) => setConfirmPass(event.target.value)}
                    />
                    {watch("Confirm") !== watch("Password")}
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                    <br/>
                    <a className="login-account" href="/">Already haven an account. Sign In.</a>
            </form>
        </div>

    )
}
