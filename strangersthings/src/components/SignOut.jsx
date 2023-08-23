import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Authenticate';

const SignOutButton = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
   
    useEffect(() => {
        localStorage.removeItem('Username');
        localStorage.removeItem('Password');

        localStorage.setItem("isSignedIn", false);
        logout(false);

        navigate("/");

    },[logout, navigate])

    return (

        <button onClick={logout}>Sign Out</button>
    )
}

export default SignOutButton;