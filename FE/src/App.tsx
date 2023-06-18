import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Splash from "./pages/Splash"
import "./Services/Utils/interceptor"
import Login from "./pages/auth"
import Home from './pages/app/Home';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Splash/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path="/home"  element={<Home/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
