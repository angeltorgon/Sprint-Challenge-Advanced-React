export default function useLocalStorage() {
    const setToStorage = (data) => {
        window.localStorage.setItem("data", data)
    }
    
    const removeFromStorage = (data) => {
        window.localStorage.removeItem("data")
    }

    return [ setToStorage, removeFromStorage ]
}
