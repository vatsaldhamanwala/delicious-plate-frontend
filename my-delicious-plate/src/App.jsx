import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'
import { useAuth } from "./context/AuthContext/AuthContext";


function App() {

  const {getCurrentUser} = useAuth()

  useEffect(() => {
    getCurrentUser();
  }, []);


  return (
    <>
      <Header />
      
      <Outlet />
      <Footer />
    </>
  )
}

export default App
