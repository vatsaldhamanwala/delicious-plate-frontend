import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import axios from 'axios'

export default function AuthProvider({children}) {

    const[user, setUser] = useState('')

    //sign up
    const signUp = async(formData) =>{
        try {

            const API = process.env.VITE_API_BASE_URL

            const response = await axios.post(`${API}/auth/sign-up`, 
                formData, 
                {withCredentials: true, headers: { "Content-Type": "multipart/form-data" },
            })

            const data = await response.data

            setUser(data.data.user)

            const user= data.data.user
            
            console.log("Sign up Api response: ", data);
            console.log("User: ", user);
            alert(`${user.full_name} sign up successfully!!`)
            
            return data
        } catch (error) {
            console.error('fail to sign up this user', error)
            alert("Sign up failed!! ")
        }
    } 

  return (
    <AuthContext.Provider value={{user,setUser,signUp}}>
       {children}
    </AuthContext.Provider> 
  )
}

