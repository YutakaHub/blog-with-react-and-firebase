import React from 'react';
import { signInWithPopup } from "firebase/auth";
import {auth, provider} from "../firebase"
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider)
    .then((result)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      //ログイン後Homeへリダイレクト
      navigate("/");
    });
  };

  return (
  <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
  </div>
  )};

export default Login;
