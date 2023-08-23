import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
        return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    })


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}



// const [username, setUsername] = useState(() => {
//     // const savedUser = localStorage.getItem("Username");
//     // const parsedUser = JSON.parse(savedUser);
//     //     return parsedUser || "";
// });
// const [password, setPassword] = useState(() => {
//     const savedPass = localStorage.getItem("Password");
//     const parsedPass = JSON.parse(savedPass);
//         return parsedPass || "";
// });
// const [confirmPass, setConfirmPass] = useState("");


// useEffect(() => {
//     localStorage.setItem('Username', JSON.stringify(username));
//     localStorage.setItem('Password', JSON.stringify(password));
//     localStorage.setItem('Confirm', JSON.stringify(confirmPass));

//     }, [username]
    
// )