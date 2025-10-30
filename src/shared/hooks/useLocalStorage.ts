import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.error('Error reading localstorage key', key, err);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (err) {
            console.error('Error saving to localStorage', key, err);
        }
    },[key, storedValue]);

    return [storedValue, setStoredValue] as const;
}

// Example usage:
// const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

/*
- TypeScript infers T as string
const [name, setName] = useLocalStorage("username", "John");

- TypeScript infers T as number
const [count, setCount] = useLocalStorage("counter", 0);

- TypeScript infers T as User interface
interface User { id: number; name: string; }
const [user, setUser] = useLocalStorage("user", { id: 1, name: "John" });
*/

// explaning the typescript logic
// <T> makes the hook generic, allowing it to work with any data type

// The type T is inferred from the initialValue parameter

// useState<T> ensures the state has the same type as the generic T
// Uses a function initializer for lazy initialization

// return [storedValue, setStoredValue] as const;

// as const makes TypeScript treat the array as a tuple rather than an array

// Without as const, TypeScript would infer
// (T | React.Dispatch<React.SetStateAction<T>>)[]

// With as const, it's correctly typed as
// [T, React.Dispatch<React.SetStateAction<T>>]