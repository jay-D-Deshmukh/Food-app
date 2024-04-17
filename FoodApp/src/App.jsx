import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from "./Componants/StartPage"
import Login from './Componants/Login';
import Signup from './Componants/Signup';
import Home from './Componants/Home';
import Fooditem from './Componants/Fooditem';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<StartPage/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/register" element={<Signup/>}/>
     <Route  path="/home" element={<Home/>}/>
     <Route path='/Fooditem' element={<Fooditem/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
