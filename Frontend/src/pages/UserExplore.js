import "../CSS/ExplorePage.css";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import {ExploreKarobarCard} from "../components/ExploreKarobarCard"
import React, { useEffect, useState } from 'react'

const UserExplore = () => {

  const userId = window.location.pathname.split('/').pop();
  const [ user, setUser ] = useState()

  const getData = async() => {
    console.log(1)
    const response= await fetch("http://localhost:5000/api/getAllKarobarsOfUser", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId })
    })

    const data = await response.json();
    console.log("data", data)

    if(data.status===200){
      console.log(data.user)
      setUser(data.user)
    }
  }

  useEffect(()=>{
    getData();
  }, [])
  
  return (
    <div className="explore-page" style={{minHeight: '100vh'}}>
     
      <Header cssclass="navbar"/>
      <section className="search-box" style={{ height: 'auto' }}>
        <h1 className="type1" style={{position:'relative', top: '0', width:'auto'}}>All karobars by {(user)? user.username : ""} </h1>
        <h1 className="type1" style={{position:'relative', top:'-19px',   width:'auto'}}> Mail: {(user)? user.email : ""} </h1>
      </section>
      <div className="divider13" />
      <div className="search-list2" style={{minHeight: '500px'}}>

         <ExploreKarobarCard users={(user) ? [user]: []}/> 

      </div>
      <Footer cssclass="footer7" />
    </div>
  );
};

export default UserExplore;
