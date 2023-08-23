import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignOut() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('Username');
        localStorage.removeItem('Password');
        localStorage.removeItem('Confirm');

        navigate("/");

    },[])
};