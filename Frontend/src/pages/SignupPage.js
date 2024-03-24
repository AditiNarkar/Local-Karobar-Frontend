import { useState,useEffect } from "react";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import { useNavigate } from "react-router-dom";
import "../CSS/SignupPage.css";
import React from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const SignupPage = () => {
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


  const [user, setUser] = useState({
    username:"", email:"", password:"", cpassword:""
  });

  const navigate = useNavigate()
  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({...user,[name]:value });
    //console.log(setUser)
  }

  const postData = async (e) => {
    e.preventDefault()

    const {username, email, password, cpassword} = user
    const signupURL = "http://localhost:5000/api/signup"

    const response = await fetch(signupURL, {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
      username, email, password, cpassword
      })
    })

    const data = await response.json()


    if(data.status == 201){
      toast(data.msg, {
        onClose: () => {
          navigate("/loginpage")
        },
        className: 'foo-bar',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
    else{
      toast(data.msg, {
        className: 'foo-bar',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }




  return (
    <div className="signup-page">
    <ToastContainer toastStyle={{ color: "#874d00", boxShadow:"12px 12px 2px 1px #453400;", fontSize: "18px", borderRadius: "20px"}} />

      <Header cssclass="navbar"/>
      <section className="yellow-box7">
        <div className="yellow-box-before11" />
        <div className="signup3">S I G N U P</div>
        <img className="logo-1-icon9" alt="" src="/logo-14@2x.png" />
        <form method="POST">
          <div className="right-side3">
          <div className="tagline1">Become a member now!</div>
            
            <div className="username">Username :</div>
            <input className="username-input" name="username" value = {user.username} onChange={handleInputs}/>

            <div className="email8">Email address :</div>
            <input type="email" name="email" className="email-input9" value = {user.email} onChange={handleInputs}/>

            <div className="password2">Create Password :</div>
            <input type="password" name="password" className="password-input3" value = {user.password} onChange={handleInputs}/>

            <div className="password3">Confirm Password :</div>
            <input type="password" name="cpassword" className="password-input4" value = {user.cpassword} onChange={handleInputs}/>
          </div>

          <div className="already-a-member-container">
            <span className="already-a-member-container1">
              <span>Already a member?</span>
              <span className="span">{` `}</span>
              <a href="#"><span className="log-in">Log In</span></a>
            </span>
          </div>
          <div className="divider15" />
          <img
            className="demo2-removebg-preview-2-icon2"
            alt=""
            src="/demo2removebgpreview-22@2x.png"
            data-animate-on-scroll
          />
          <img
            className="demo2-removebg-preview-1-icon2"
            alt=""
            src="/demo2removebgpreview-11@2x.png"
            data-animate-on-scroll
          />

          <button className="create-acc-btn" onClick={postData}>
            <div className="create-account1" >Create Account</div>
          </button>
        </form>
      </section>
     

      <Footer cssclass="footer"/>

    </div>
  );
};

export default SignupPage;
