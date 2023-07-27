import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Component/Home'
import About from './Component/About'
import Destination from './Component/Destination'
import {BrowserRouter , Routes, Route}from "react-router-dom"
import Travel from './Component/Travel'

function App(){
  return(
    <>
    {}
    <BrowserRouter>
    <Travel/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Destination/>}/>
      <Route path ="/dest" element={<Travel/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;