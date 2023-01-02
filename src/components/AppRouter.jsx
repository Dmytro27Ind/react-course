import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../context';

function AppRouter() {
  const {isAuth} = useContext(AuthContext)
  return (
    isAuth
      ?
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/posts" element={<Posts/>}/>
        <Route exact path="/posts/:id" element={<PostIdPage/>}/>
        <Route exact path="/error" element={<Error/>}/>
        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<Navigate to="/error"/>} />
      </Routes>
      :
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<Navigate to="/login"/>} />
      </Routes>
  )
}

export default AppRouter