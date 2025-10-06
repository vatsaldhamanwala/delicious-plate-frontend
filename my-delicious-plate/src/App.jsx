import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'
import RecipeCard from './components/RecipeCard/RecipeCard'

function App() {

  return (
    <>
      <Header />
      {/* <RecipeCard recipeBy= 'Mike' title= 'Tiramisu Jar' category='Dessert' /> */}
      <RecipeCard />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
