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
import AuthProvider from './context/AuthContext/AuthProvider.jsx'
import ViewProfile from './Pages/Profile/ViewProfile.jsx'
import ProfileSaved from './Pages/Profile/ProfileSaved.jsx'
import ProfilePosts from './Pages/Profile/ProfilePosts.jsx'
import EditProfile from './Pages/AccountsSettings/EditProfile.jsx'
import ChangeEmail from './Pages/AccountsSettings/ChangeEmail.jsx'
import ChangePassword from './Pages/AccountsSettings/ChangePassword.jsx'
import BasicInfo from './Pages/PostRecipes/BasicInfo.jsx'
import Media from './Pages/PostRecipes/Media.jsx'
import IngredientsAndSteps from './Pages/PostRecipes/IngredientsAndSteps.jsx'
import RecipeProvider from './context/RecipeContext/RecipeProvider.jsx'
import Review from './Pages/PostRecipes/Review.jsx'
import RecipeDetail from './Pages/RecipeDetail/RecipeDetail.jsx'
import UserRecipeDetail from './Pages/RecipeDetail/UserRecipeDetail.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}>
        <Route path='' element= {<Home />} />
        <Route path='about-us' element= {<AboutUs />} />
        <Route path='contact' element= {<Contact />} />

        {/* view profile routes */}
        <Route path='view-profile' element= {<ViewProfile />} >
          <Route index element= {<ProfilePosts />} />
          <Route path='saved' element= {<ProfileSaved />} />
        </Route>

        {/* account setting routes */}
        <Route path='account-settings/edit-profile' element= {<EditProfile />}/>
        <Route path='account-settings/change-email' element= {<ChangeEmail />}/>
        <Route path='account-settings/change-password' element= {<ChangePassword />}/>

        {/* post recipe routes */}
        <Route path='post-recipe/basic-info' element= {<BasicInfo />}/>
        <Route path='post-recipe/media' element= {<Media />}/>
        <Route path='post-recipe/ingredients-and-steps' element= {<IngredientsAndSteps />}/>
        <Route path='post-recipe/review' element= {<Review />}/>        

        <Route path='recipe-detail' element= {<RecipeDetail />}/>      
        <Route path='user-recipe-detail' element= {<UserRecipeDetail />}/>        



      </Route>
      
      {/* auth routes with no nav bars */}
      <Route path='auth/sign-up' element= {<SignUp />} />
      <Route path='auth/login' element= {<Login />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RecipeProvider>
        <RouterProvider router={router} />
      </RecipeProvider>
    </AuthProvider>
  </StrictMode>,
)
