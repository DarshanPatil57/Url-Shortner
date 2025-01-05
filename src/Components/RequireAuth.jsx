import { UrlState } from '@/Context'
import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RequireAuth({children}) {
    const navigate = useNavigate()

    const {isAuthenticated} = UrlState()

    useEffect(()=>{
        if(!isAuthenticated){ 
            navigate("/auth")
        }
    },[isAuthenticated])
    
    if(isAuthenticated) return children
}
