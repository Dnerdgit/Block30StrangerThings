// import { AuthProvider } from 'react-auth-kit'
import { createContext, useContext, useState } from 'react'
// import { useLocalStorage } from '../hooks/useLocalStorage'

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isSignedIn, setIsSignedIn] = useState(
        localStorage.getItem("Username") && localStorage.getItem("Password")
        )
    ;

    const handleAuth = (signedIn) => {
        setIsSignedIn(signedIn);
    };
    return <AuthContext.Provider value ={{ isSignedIn, handleAuth}}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}