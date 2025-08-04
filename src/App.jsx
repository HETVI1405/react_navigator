
import './App.css'
import AllRoute from './Components/AllRoute'
import { AuthContextProvider } from './Components/AuthContext';
import Navbar from './Components/Navbar'

function App() {

  return (
   <>
   <AuthContextProvider>
      <Navbar />
      <AllRoute />
    </AuthContextProvider>
   </>
  )
}


import 'bootstrap/dist/css/bootstrap.min.css';
export default App
