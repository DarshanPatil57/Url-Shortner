import { createContext, useContext, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import { getCurrentUser } from './db/apiAuth';


const UrlContext = createContext()

const UrlProvider = ({children}) =>{

    const {data:user,fn:fetchUser} = useFetch(getCurrentUser)

    const isAuthenticated = user?.role === "authenticated"

    useEffect(() => {
      fetchUser()
    }, [])
    

    return <UrlContext.Provider value={{user,fetchUser,isAuthenticated}}>
        {children}
    </UrlContext.Provider>
}

export const UrlState = () =>{
    return useContext(UrlContext)
}

export default UrlProvider; 