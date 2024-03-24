import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import "../CSS/ResetPsPage.css";
import React from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const ResetPsPage = () => {
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

  const [password,setPassword] = useState("")
  const [cpassword,setCpassword] = useState("")

  const uniqueToken = window.location.pathname.split('/').pop();
  const navigate = useNavigate()

  const tokenURL = "http://localhost:3000/api/resetOperations"
  const resetPassword = async() => {
    try{
      const res = await fetch(tokenURL,{
        method : "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({uniqueToken,password,cpassword})
      })

      const data = await res.json()

      if(data.status==201){       
        toast(data.msg, {
          onClose: () => {
            navigate("http://localhost:3000/loginpage")
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
    }catch(e){
      console.log("Error at fetching get ", e)
    }
  }




  return (
    <div className="resetps-page">
    <ToastContainer toastStyle={{ color: "#874d00", boxShadow:"12px 12px 2px 1px #453400;", fontSize: "18px", borderRadius: "20px"}} />
      
      <section className="frame">
        
        <Header cssclass="navbar"/>

        <div className="frame2">
          <div className="frame3">
            <img
              className="reset-ps-vector-icon"
              alt=""
              src="/resetpsvector@2x.png"
              data-animate-on-scroll
            />
            <div className="text-logo" data-animate-on-scroll>
              <img
                className="demo2-removebg-preview-1-icon"
                alt=""
                src="/demo2removebgpreview-1@2x.png"
              />
              <img
                className="demo2-removebg-preview-2-icon"
                alt=""
                src="/demo2removebgpreview-2@2x.png"
              />
            </div>
          </div>
          <div className="frame4">
            <div className="yellow-box1">
              <div className="yellow-box-before1" />
              
              <div className="signup">Reset Password</div>
              <div className="divider1" />
              
              <div className="your-new-password">
                Your new password must contain:
              </div>
              <div className="character">Character</div>
              <div className="uppercase">Uppercase</div>
              <div className="lowercase">Lowercase</div>
              <div className="number">Number</div>
              <div className="symbol">Symbol</div>
              <div className="div">{`8+        `}</div>
              <div className="aa">AA</div>
              <div className="aa1">aa</div>
              <div className="div1">123</div>
              <div className="div2">@#$</div>

              <div className="password">Password :</div>
              <input type="password" className="password-input" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="password1">Confirm Password :</div>
              <input type="password" className="password-input1" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />

              <button className="reset-btn" onClick={resetPassword}>
                <div className="reset">Reset</div>
              </button>

            </div>
            <img className="logo-1-icon1" alt="" src="/logo-1@2x.png" />
          </div>
        </div>
      </section>

      <Footer cssclass="footer"/>

    </div>
  );
};

export default ResetPsPage;
