import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'
// import SearchBar from './components/SearchBar/SearchBar'
import LoggedInUserNavBar from './components/LoggedInUserNavBar/LoggedInUserNavBar'
// import RecipeCard from './components/RecipeCard/RecipeCard'


function App() {

  return (
    <>
      {/* <Header /> */}
      
      <LoggedInUserNavBar />
      
      {/* <SearchBar /> */}
      {/* <RecipeCard recipeBy= 'Mike' title= 'Tiramisu Jar' category='Dessert' /> */}
      {/* <RecipeCard /> */}
      
      <Outlet />
      <Footer />
    </>
  )
}

export default App
