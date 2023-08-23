import { AuthProvider } from 'react-auth-kit'
import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'



export function AuthProvider({ children }) {
    const [isSignedIn, setIsSignedIn] = useState(useLocalStorage(
        localStorage.getItem("Username") && localStorage.getItem("Password")
        )
    );

    const handleAuth = (signedIn) => {
        setIsSignedIn(signedIn);
    };
    return <AuthContext.Provider value ={{ isSignedIn, handleAuth}}>
        {children}
    </AuthContext.Provider>
}