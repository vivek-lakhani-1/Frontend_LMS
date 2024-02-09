
import Navbar from './components/Navbar'
import Login from './components/Login'
<<<<<<< Updated upstream
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route} from "react-router-dom"
=======


>>>>>>> Stashed changes

function App() {
  

  return (
    <>
<<<<<<< Updated upstream
    <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/login" element={<Login />}></Route>
     <Route path="/signup" element={<SignUp />}></Route>
     <Route exact path="/" element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
=======
     <Navbar />
     <Login />
>>>>>>> Stashed changes
       
    </>
  )
}

export default App
