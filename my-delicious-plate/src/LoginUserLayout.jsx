import React from 'react'
import LoggedInUserNavBar from './components/LoggedInUserNavBar/LoggedInUserNavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

export default function LoginUserLayout() {
  return (
    <>
        <LoggedInUserNavBar />
        <Outlet/>
        <Footer/>
    </>
  )
}
