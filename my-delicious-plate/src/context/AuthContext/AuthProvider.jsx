import React, { useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContext.js'
import axios from 'axios'

export default function AuthProvider({children}) {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    

  //sign up
  const signUp = async(formData) =>{
    try {

      // const API = process.env.VITE_API_BASE_URL

      const response = await axios.post(`http://127.0.0.1:8000/api/v1/auth/sign-up`, 
          formData, 
          {withCredentials: true, headers: { "Content-Type": "application/json" },}
      )

      const userData = response.data.data.user
      console.log("🚀 ~ signUp ~ userData:", userData)

      setUser(userData)
      
      localStorage.setItem("user", JSON.stringify(userData))

      return response.data

    } catch (error) {

      console.error("Signup failed", error)
      throw error
    }
  } 

  // login
   const login = async({user_name, password}) =>{
    try {

      const response = await axios.post(`http://127.0.0.1:8000/api/v1/auth/login`, 
          {user_name, password}, 
          {withCredentials: true, headers: { "Content-Type": "application/json" },}
      )

      const userData = response.data.data.user
      console.log("🚀 ~ signUp ~ userData:", userData)

      setUser(userData)
      
      localStorage.setItem("user", JSON.stringify(userData))

      return response.data

    } catch (error) {

      console.error("login failed", error)
      throw error
    }
  } 

  // get user when page refresh
  const getCurrentUser = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/users/me`,
        { withCredentials: true }   
      )

      const userData = response.data.data.user
      console.log("🚀 ~ getCurrentUser ~ userData:", userData)

      setUser(userData)

      localStorage.setItem("user", JSON.stringify(userData))

      return userData

    } catch (error) {
      setUser(null)
      localStorage.removeItem("user")
      return null
    }
  }

  // logout
  const logout = async () => {
    try {

      await axios.post(`http://127.0.0.1:8000/api/v1/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      // 🔥 Always clear frontend state
      console.error("Logout failed", error);
    } finally {
      setUser(null);
      localStorage.removeItem("user");
    }
  };


  return (
    <AuthContext.Provider value={{user, setUser, signUp, login , getCurrentUser, logout}}>
       {children}
    </AuthContext.Provider> 
  )
}

