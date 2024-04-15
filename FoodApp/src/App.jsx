import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from "./Componants/StartPage"
import Login from './Componants/Login';
import Signup from './Componants/Signup';
import Home from './Componants/Home';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<StartPage/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Signup/>}/>
     <Route exact path="/home" element={<Home/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
