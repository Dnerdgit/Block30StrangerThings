import { useState, useEffect } from "react";

const getStorageValue = (username, []) => {
    const savedUser = localStorage.getItem(username);
    const parsedUser = JSON.parse(savedUser);
        return parsedUser || "";
}

export const useLocalStorage = (username, []) => {
    const [username, setUsername] = useState(() => {
        return getStorageValue(username, []);
    })


    useEffect(() => {
        localStorage.setItem('Username', JSON.stringify(username));
    }, ['Username', username]);
    return [username, setUsername];
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