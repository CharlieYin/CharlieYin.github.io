import { useState, useEffect, useCallback } from 'react';

function useLocalStorage(key, initialValue) {
    // Try to fetch data from localstorage
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Fetch ' + toString(key) + ' from localStorage fails:', error);
            return initialValue;
        }
    });

    // When storedValue or key changes，sync it to localStorage
    useEffect(() => {
        try {
            if (storedValue !== undefined) {
                window.localStorage.setItem(key, JSON.stringify(storedValue));
            }
        } catch (error) {
            console.error('Update ' + toString(key) + ' to localStorage fails:', error);
        }
    }, [key, storedValue]);

    // Remove key and storedValue
    const remove = useCallback(() => {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(undefined);
        } catch (error) {
            console.error('Remove ' + key + ' form localStorage fails:', error);
        }
    }, [key]);

    return [storedValue, setStoredValue, remove];
}

export default useLocalStorage;