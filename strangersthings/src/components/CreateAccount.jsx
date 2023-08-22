import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { RegisterSignInData } from "../API";
// import { useLocalStorage } from '../hooks/useLocalStorage';


export default function CreateAccount() {


        const [username, setUsername] = useState(() => {
        const savedUser = localStorage.getItem("Username");
        const parsedUser = JSON.parse(savedUser);
            return parsedUser || "";
        });

        // const [username, setUsername] = useLocalStorage("Username", "");
        // useState(() => {
        //     const savedUser = localStorage.getItem("Username");
        //     const parsedUser = JSON.parse(savedUser);
        //     return parsedUser || "";
        // });
        const [password, setPassword] = useState(() => {
            const savedPass = localStorage.getItem("Password");
            const parsedPass = JSON.parse(savedPass);
            return parsedPass || "";
        });
        const [confirmPass, setConfirmPass] = useState("");
  
        const {
            register,
            formState: { errors },
        } = useForm();

        const navigate = useNavigate();

        useEffect(() => {
            localStorage.setItem('Username', JSON.stringify(username));
            localStorage.setItem('Password', JSON.stringify(password));
            localStorage.setItem('Confirm', JSON.stringify(confirmPass));

            }, [username]
            
        )

        const handleSubmit = async (event) => {
            if (password !== setConfirmPass) {
                return;
            }
            const response = await RegisterSignInData(username, password, confirmPass);
            event.preventDefault();
            if (response.success) {
                navigate("/posts");
            } else {
                setError(errors);
            }
                
            
    //     console.log(newProfile);
    //     

    //         const newProfileList = [...posted, newProfile.data.posts];
    //         setPosted(newProfileList);

    //         setUsername(username);
    //         setPassword(password);
    //         setAcceptPass(acceptPass);
    //    
    }
    return (

        <div className="signInApp">
        
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} className='sign-up-form'>
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

                    <br/>
                    <br/>
                    <button onClick={(() => (setConfirmPass(password) ))}>Submit</button>
            </form>
        </div>

        )
    }

// (setPassword === password) ? 'Login Accepted' : password
