import { createContext, useContext, useMemo, useState, useEffect } from "react";
import {useLocalStorage} from './useLocalStorage';
import { logoutFirebase, userListener } from "../config/authCall";

//Inicializamos AuthContext vacío
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    //Null es como si estuviera no logueado
    const [user, setUser] = useLocalStorage('user', null);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        //Saber si el usuario esta logueado 
       if(mounted) userListener(listenUser);
       else setMounted(true);
    }, [mounted]);

    const logout = () => {
        logoutFirebase();
    }

    const listenUser = (user) => {
        //console.log(user);
        setUser(user);
    }

    const value = useMemo(
        () => ({
            user,
            logout
        }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 

export const useAuth = () => {
    return useContext(AuthContext);
}