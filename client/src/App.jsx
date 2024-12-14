
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import AddProducts from "../Pages/Admin/AddProducts"


function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/addProducts" element={<AddProducts/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
