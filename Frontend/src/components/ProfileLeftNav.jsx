import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/ProfileLeftNav.css"

export const ProfileLeftNav = ({active, user}) => {

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
      toast(data.msg, {
        onClose: () => {
          navigate("/")
        },
        className: 'foo-bar',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  var activeTab;
  
  if (active === 'my-karobars') {
    activeTab = <>
    <div className="profile44 active">My Karobars</div>
    <div className="profile45"  onClick={logout} >Logout</div>
    <div className="profile46" ><Link to = "/uploadstep1">Upload New Karobar</Link></div>
    </>;
  } 
  
  else if (active === 'upload') {
    activeTab = <>
    <div className="profile44">My Karobars</div>
    <div className="profile45 " onClick={logout} >Logout</div>
    <div className="profile46 active">Upload New Karobar</div>
    </>;
  } 
  else{
    activeTab = <>
    <div className="profile44">My Karobars</div>
    <div className="profile45 active" onClick={logout} >Logout</div>
    <div className="profile46">Upload New Karobar</div>
    </>;
  }

  return (
    <div className="left-side-nav1">
        <img className="logo-1-icon6" alt="" src="/logo-13@2x.png" />
        {activeTab}
        <div className="hello-username1" style={{ width: '313px' }}>Hello, {user}</div>
        <div className="divider11" />
      </div>
  )
}