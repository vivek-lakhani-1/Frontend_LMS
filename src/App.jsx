
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/login" element={<Login />}></Route>
     <Route path="/signup" element={<SignUp />}></Route>
     <Route exact path="/" element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
       
    </>
  )
}

export default App
