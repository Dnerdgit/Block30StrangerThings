import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { RegisterSignInData } from "../API";
import { useSessionStorage } from '../hooks/useLocalStorage';
// import { useAuth } from './Authenticate';

export default function CreateAccount() {
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

        // const [confirmPass, setConfirmPass] = useLocalStorage("confirmPass");
        // useState(() => {
        //     const savedConfirm = localStorage.getItem("confirmPass");
        //     const parsedConfirm = JSON.parse(savedConfirm);
        //     console.log(savedConfirm);
        //     return parsedConfirm || "";
        // })
        
        // const handleAuth = useAuth();
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm();

        const navigate = useNavigate();

        useEffect(() => {
            console.log(username);
            sessionStorage.setItem('username', JSON.stringify(username));
            sessionStorage.setItem('password', JSON.stringify(password));
            // localStorage.setItem('confirm', JSON.stringify(confirmPass));

            }, [username]
        )
        

        const onSubmit = async (data, event) => {
            const response = await RegisterSignInData(data.username, data.password);
            event.preventDefault();
            console.log(data);
            
            console.log(response);
            if (response.success) {
                // handleAuth(true);
                navigate("/posts");
            } else {
                alert("Invalid Entry");
                // handleAuth(false);
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
                    {...register("username") 
                    // {
                    //     required: true,
                    //     minLength: 8,
                    //     maxLength: 12,
                    // })
                    } 
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
                {...register("password") 
                // {
                //     required: true,
                //     minLength: 10,
                //     maxLength: 20,
                // })
                } 
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
                {/* <label>
                    Confirm Password
                </label>
                <input
                    {...register("confirm")
                    // , {
                    //     required: true,
                    //     minLength: 10,
                    //     maxLength: 20,
                    // })
                    } 
                    id="password"
                    type="password"
                    name="confirmPass"
                    value={confirmPass}
                    placeholder="**********"
                    onChange={(event) => setConfirmPass(event.target.value)}
                    /> */}
                    {/* {watch("confirm") !== watch("password")} */}
                    <br/>
                    <br/>
                    <button value="submit">Submit</button>
                    <br/>
                    <a className="login-account" href="/">Already haven an account. Sign In.</a>
            </form>
        </div>

    )
}