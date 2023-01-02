import React from 'react'
import { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'
import MyInput from '../components/UI/input/MyInput'
import { useNavigate } from "react-router-dom";

function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
    navigate('/')
  }

  return (
    <div>
        <h1>Page for Login</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder='Enter login'/>
            <MyInput type="password" placeholder='Enter password'/>
            <MyButton>Login</MyButton>
        </form>
    </div>
  )
}

export default Login