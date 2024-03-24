import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import "../CSS/ForgotPsPage.css";
import React from 'react'

const ForgotPsPage = () => {
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

  const [email,setEmail] = useState("")
  //const navigate = useNavigate()
  
  const sendemailURL = "http://localhost:5000/api/sendemail"
  const sendEmail = async(e) => {
    e.preventDefault()
    console.log("reset email is ", email)
    const response = await fetch(sendemailURL, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({email})
    
    })

    const data = await response.json()

    if(data.status==201){
      window.alert(data.msg)
      //navigate("/resetpspage")

    }
    else{
      window.alert(data.msg)
      //window.location.reload()
    }
  }


  return (
    <div className="forgotps-page">
      {/* <section className="footer2">
        <div className="copyright-footer2">CopyRight FOOTER</div>
      </section> */}
      <Footer cssclass="footer"/>
      <Header cssclass="navbar"/>
      {/* <header className="navbar2">
        <div className="nav-links2">
          <div className="contact2">Contact</div>
          <div className="about2">{`About `}</div>
          <div className="home2">Home</div>
        </div>
      </header> */}
      <div className="yellow-box2">
        <div className="yellow-box-before2" />
        
        <div className="no-worries-enter">No worries, enter your email and we will send you a link to reset your password.</div>
        <div className="signup1">Forgot your password ?</div>
        <div className="divider2" />
        <input type="email" placeholder="Enter registered email..." className="email-input1" value={email} onChange={(e) => setEmail(e.target.value)} />
        <img className="email-icon" alt="" src="/email@2x.png" />
       
        <button className="send-btn">
          <div className="send" onClick={sendEmail}>Send</div>
        </button>

        <div className="back-to-login"> <Link to = "/loginpage">Back to login</Link></div>

      </div>
      <img className="logo-1-icon2" alt="" src="/logo-1@2x.png" />
      <img
        className="forgot-ps-vector-icon"
        alt=""
        src="/forgotpsvector@2x.png"
        data-animate-on-scroll
      />
      <div className="text-logo1" data-animate-on-scroll>
        <img
          className="demo2-removebg-preview-1-icon1"
          alt=""
          src="/demo2removebgpreview-1@2x.png"
        />
        <img
          className="demo2-removebg-preview-2-icon1"
          alt=""
          src="/demo2removebgpreview-21@2x.png"
        />
      </div>
    </div>
  );
};

export default ForgotPsPage;
