import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

//import {data} from "../pages/MyKarobarsPage.js"
import "../CSS/Header.css"

export const Header = ({cssclass, data}) => {
 // console.log("headerrrrrrr data: ", data)
 /* const [username, setUsername] = useState("Username")
  if(data){
    setUsername(data.username)
  }*/

  const navigate = useNavigate()
  const logoutURL = "http://localhost:5000/api/logout"
  const logout = async() => {
   const res = await fetch(logoutURL,{
      method:"GET",
      headers:{
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      credentials: "include"
    })
    const data = await res.json()

    if(res.status == 200){
      window.alert(data.msg)
      navigate("/")}
  }
  return (
        <header className={cssclass}>
        <div className="nav-links">
          <h1 className="contact">Contact</h1>
          <h1 className="about">About</h1>
          <h1 className="home">Home</h1>
        </div>
        
        {
          (data==null || data=="")?
          <div className="profile" name = "username"> </div>
          :
          <><div className="profile" name = "username">Signed In as: {data} </div>
          <button className="logout-2-1" onClick={logout} />
          </>
        }
      </header>

  )
}