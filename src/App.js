import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import About from "./components/UI/pages/About";
import Posts from "./components/UI/pages/Posts";
import Error from "./components/UI/pages/Error";
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/posts" element={<Posts/>}/>
        <Route exact path="/error" element={<Error/>}/>
        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<Navigate to="/error"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
