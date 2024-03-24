import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import "../CSS/LoginPage.css"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

const LoginPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

 
  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()
    const loginURL = "http://localhost:5000/api/login"
    try{
      const response = await fetch(loginURL, {
        method:"POST",
        credentials: "include",
        headers:  {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
        body: JSON.stringify({email, username, password})
      })
  
      const data = await response.json()

    //  console.log("status: ",data.status)
  //data.token

      if(data.status == 200 ){
        toast(`Logging in ${username}...`, {
          className: 'foo-bar',
          onClose: () => {
            navigate("/mykarobarspage")
          },
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
      else{
        toast(`Error occured ! ${data.msg}`, {
          className: 'foo-bar',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    }
    
    catch(e){
      console.log("Error", e)
    }
  }
    
    

  return (
    <>
    <ToastContainer toastStyle={{ color: "#874d00", boxShadow:"12px 12px 2px 1px #453400;", fontSize: "18px", borderRadius: "20px"}} />

    <div className="login-page">
      <Footer cssclass="footer"/>
      {/* <header className="navbar3">
        <div className="nav-links3">
          <div className="contact3">Contact</div>
          <div className="about3">{`About `}</div>
          <div className="home3">Home</div>
        </div>
      </header> */}
      <Header cssclass="navbar"/>

      
      <div className="yellow-box3">
        <div className="yellow-box-before3" />
        <div className="signup2">L O G I N</div>
        <div className="tagline">WELCOME at</div>
        <div className="divider3" />
        <img className="logo-1-icon3" alt="" src="/logo-11@2x.png" />

        <form method="POST">
          <img className="email-icon1" alt="" src="/email@2x.png" />
          <input type="email" placeholder="Enter registered email"  value = {email}  onChange={(e)=> setEmail(e.target.value)} className="email-input2" />
          
          <div className="or"></div>
          <input placeholder="Enter registered username" value = {username} onChange={(e)=> setUsername(e.target.value)} className="email-input3" />
          <img className="user-icon" alt="" src="/user@2x.png" />
          <div className="divider4" />

          <img className="password-icon" alt="" src="/password@2x.png" />
          <input type="password" placeholder="Enter password" value = {password} onChange={(e)=> setPassword(e.target.value)} className="password-input2" />
          
          <div className="dont-have-an-container">
            <span className="dont-have-an-container1">
              <span>{`Don’t have an account? `}</span>
              <span className="create-one">Create one</span>
            </span>
          </div>
          {/* <div className="enter-credentials">Enter credentials</div> */}

          <button className="login-btn" onClick={loginUser}>
            <div className="create-account">Log In</div>
          </button>

          <div className="forgot-password">Forgot password?</div>
        </form>
      </div>
      <img
        className="teacher-icon1"
        alt=""
        src="/teacher@2x.png"
        data-animate-on-scroll
      />
      <img
        className="shop-icon1"
        alt=""
        src="/shop@2x.png"
        data-animate-on-scroll
      />
      <img
        className="cleaners-icon"
        alt=""
        src="/cleaners@2x.png"
        data-animate-on-scroll
      />
      <img
        className="cameraman-icon"
        alt=""
        src="/cameraman@2x.png"
        data-animate-on-scroll
      />
    </div>
    </>
  );
};

export default LoginPage;
