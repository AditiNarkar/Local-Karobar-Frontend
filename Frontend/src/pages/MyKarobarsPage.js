import "../CSS/MyKarobarsPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import {ProfileLeftNav} from "../components/ProfileLeftNav"
import {MyKarobarCard} from "../components/MyKarobarCard"
import React from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const MyKarobarsPage = () => {

  const mykarobarsURL = "http://localhost:5000/api/mykarobars"  
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const getData = async () => {
    try{
      const res = await fetch(mykarobarsURL,{
        method: "GET", 
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json()
     // console.log(data)
     // console.log(data.karobars)
      setUser(data)
     
      // if(!res.status == 200){
      //   console.log(res.error)
      // }
    }
    
    catch(e){
      console.log(e)
      window.alert("Please try after some time.")
      //navigate("/loginpage")
    }
  }

  useEffect(()=> { getData() }, [])

  return (
    
    <>
    <ToastContainer toastStyle={{ zIndex:"10000", color: "#874d00", boxShadow:"12px 12px 2px 1px #453400;", fontSize: "18px", borderRadius: "20px"}} />
    
    <div className="my-karobars-page">
      {/* <header className="navbar6">
        <div className="nav-links6">
          <div className="contact12">Contact</div>
          <div className="about6">{`About `}</div>
          <div className="home6">Home</div>
        </div>
        <button className="logout-2-13" />
        <div className="profile13">Signed In as: Username</div>
      </header> */}
      <Header cssclass="navbar" data={user.username}/>

      <div className="right-side2">
        <div className="search-list1">

          {/* <button style={{
            display: "flex",
            backgroundColor:"#faffb7",
            color: "brown",
            width: "50%",
            height: "100px",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            cursor: "pointer"
          }}>
            You have no karobars yet, Upload now !
          </button> */}

        
          <MyKarobarCard user={user} karobars={user.karobars}/>


          {/* <div className="my-karobar-card">
            <img
              className="profile-image-icon2"
              alt=""
              src="/profileimage1@2x.png"
            />
            <b className="profile14">Name of Organization</b>
            <div className="profile15">Owned by:</div>
            <div className="profile16">No. of branches:</div>
            <div className="profile17">Email:</div>
            <div className="profile18">Contact:</div>
            <button className="edit-btn">
              <div className="profile19"><img style={{width:"12px", padding:"0 5px 0 0"}} src="/icons/edit.png"/> E D I T </div>
            </button>
            <button className="share-btn">
              <div className="profile20"><img style={{width:"12px", padding:"0 5px 0 0"}} src="/icons/share.png"/>S H A R E</div>
            </button>
            <button className="delete-btn">
              <div className="profile20"><img style={{width:"12px", padding:"0 5px 0 0"}} src="/icons/bin.png"/>E N D</div>
            </button>
            <button className="view-btn">
              <div className="profile20"><img style={{height:"15px", padding:"0 5px 0 0"}} src="/icons/eye.png"/>V I E W</div>
            </button>
          </div> */}

          
        </div>
      </div>

      {/* <section className="footer6">
        <div className="copyright-footer6">CopyRight FOOTER</div>
      </section> */}
      <Footer cssclass="footer"/>

      <div className="fixed-holder "> 
      <div className="profile43">M Y <div style={{width:"14px"}}/>K A R O B A R S</div>
      <div className="divider10" />
      </div>


      {/* <div className="left-side-nav1">
        <img className="logo-1-icon6" alt="" src="/logo-13@2x.png" />
        <div className="profile44">My Karobars</div>
        <div className="profile45">Logout</div>
        <div className="profile46">Upload New Karobar</div>
        <div className="hello-username1">Hello, Username</div>
        <div className="divider11" />
      </div> */}

      <ProfileLeftNav active="my-karobars" user={user.username}/>

    </div>
    </>
  )
}

export default MyKarobarsPage;