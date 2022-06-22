import {useCallback, useState, useEffect} from "react";
import FBLogout from "../FB/FBLogout";

const storageName = "userData"

export const useFBAuth = () => {
    const [token, setToken] = useState()
    const [userID, setUserID] = useState()

    const login = useCallback((accessToken, id) => {
        setToken(token)
        setUserID(id)

        localStorage.setItem(storageName, JSON.stringify({
            userID, token
        }))
    },[])

    const logout = useCallback(() => {
        setToken(null)
        setUserID(null)
        localStorage.removeItem(storageName)
        FBLogout()
    },[])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data.userId)
        }
    },[login])

    return { login, logout, token, userID }
}