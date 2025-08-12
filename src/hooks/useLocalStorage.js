import { useEffect, useState } from "react"

export function useLocalStorage(key, initialData){
    const [data, setData] = useState(initialData)
    useEffect(()=> {
        const existingData = localStorage.getItem(key)
        if(!existingData) {
            localStorage.setItem(key, JSON.stringify(initialData))
            
        }
        else {
            setData(JSON.parse(localStorage.getItem(key)))
        }
        
    },[])
    
    const setLocalStorage = (newData) => {
        if(typeof newData === 'function'){
            localStorage.setItem(key, JSON.stringify(newData(data)))
            setData(newData(data))
        } 
        else {
            localStorage.setItem(key, JSON.stringify(newData))
            setData(newData)
        } 
    }

    return [data, setLocalStorage]
}