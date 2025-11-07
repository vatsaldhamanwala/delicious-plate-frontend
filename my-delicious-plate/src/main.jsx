import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import SignUp from './Pages/Auth/SignUp.jsx'
import Login from './Pages/Auth/Login.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}>
        <Route path='' element= {<Home />} />
        <Route path='about-us' element= {<AboutUs />} />
        <Route path='contact' element= {<Contact />} />
      </Route>

      {/* auth routes with no nav bars */}
      <Route>
        <Route path='auth/sign-up' element= {<SignUp />} />
        <Route path='auth/login' element= {<Login />} />
      </Route>

    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
