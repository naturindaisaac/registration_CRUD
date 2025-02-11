import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Home from './pages/Home';
  import Register from './pages/Register';
  import Login from "./pages/Login";

function App() {
  
  return (

<BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/Register"element={<Register />}></Route>
    <Route path="/Login"element={<Login />}></Route>
   </Routes>
   </BrowserRouter>
   
  )
}

export default App
