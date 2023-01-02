import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../components/UI/pages/About";
import Posts from "../components/UI/pages/Posts";
import PostIdPage from "../components/UI/pages/PostIdPage";
import Error from "../components/UI/pages/Error";

function AppRouter() {
  return (
    <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/posts" element={<Posts/>}/>
        <Route exact path="/posts/:id" element={<PostIdPage/>}/>
        <Route exact path="/error" element={<Error/>}/>
        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<Navigate to="/error"/>} />
    </Routes>
  )
}

export default AppRouter