import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext/AuthContext'

export default function AuthLayout() {
  const { user } = useAuth()
   
  // If user is already authenticated, redirect to protected route
  if (user) {
    return <Navigate to="/delicious-plate" replace />
  }

  
  
  return <Outlet/>
}
