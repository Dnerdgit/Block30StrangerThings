import { useState, useEffect } from "react";

const getStorageValue = (keyName, defaultValue) => {
    const savedItem = localStorage.getItem(keyName);
    const parsedItem = localStorage.JSON.parse(savedItem);
        return parsedItem || defaultValue;
}

export const useLocalStorage = (keyName, initialValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(keyName, initialValue);
    })
}