import React from 'react'
import { useAuth } from './context/AuthContext/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
    
    const {user} = useAuth()

    if(!user) {
        return <Navigate to= '/auth/login' replace />
    }

  return <Outlet/>
}
