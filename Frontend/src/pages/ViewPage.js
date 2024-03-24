import "../CSS/ViewPage.css";
import "../CSS/UploadStep2.css";
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import {ViewBranchBox} from "../components/ViewBranchBox"
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';

const ViewPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
 
    const url = new URL(window.location.href);

    const karobarId = url.searchParams.get("karobarId");
    const userId = url.searchParams.get("userId");
    karobarData(userId,karobarId)
  },[])

  const [user, setUser] = useState({})
  const [karobar, setKarobar] = useState({})

  const karobarData = async(userId,karobarId) => {
   
    const userdataURL = "http://localhost:5000/api/viewkarobar"
   
    const res = await fetch(userdataURL,{ 
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body : JSON.stringify({userId,karobarId}),
    credentials: "include"
    })
    const data = await res.json()
    console.log(data)

    if (res.status == 200){
      setUser(data.user)
      console.log(data.karobar[0])
      setKarobar(data.karobar[0])
    }
      
    }   
  
  return (
    <div className="view-page">
      <Header cssclass="navbar" />

      <img className="logo-1-icon4" alt="" src="/logo-12@2x.png" />
      <section className="auto-layout-yellow-box">

        <div className="yellow-box4">
          <div className="yellow-box-before4" />


          <div className="people4">Uploaded by : </div>
          <div className="virat-kohli"  name="username" >{user.username}</div>
            
            
                
            <div className="people">Owner Name :</div>
            <div className="virat-kohli1" name="ownerName"  >{karobar.ownerName}</div>
            <div className="people1">Type :</div>
            <div className="virat-kohli2" name= "category">{karobar.category}</div>
            
            <div className="divider5" />
            <div className="profile2">G E N E R A L I N F O R M A T I O N</div>
            <h2 className="people2" style={{left:'16px'}} name = "orgName">{karobar.orgName}</h2>
    
            
            <div className="div4" name = "orgEmail">{karobar.orgEmail}</div>
            <div className="contact5">Email Address :</div>
  
            <div className="people3">No. of people : </div>
            <div className="div3" name = "no_of-people">{karobar. no_of_people}</div>
            
            
            
            <div className="people5" name = "gender">Gender of owner :</div>
            <div className="div5" name = "gender">{karobar.gender}</div>

            {
                (karobar.profilephoto && karobar.profilephoto !='')
                ?
                <img 
                className="profile-image-icon" 
                src={`/serverImages/${karobar.profilephoto}`} />
                :
                <img 
                className="profile-image-icon" 
                src="/profileimage@2x.png" />
                
            }


            <div className="email2">No. of Branches :</div>
            <div className="div6" name = "no_of_branches"> {karobar.no_of_branches}</div>

            <button className="see-other-karobars-btn" 
            onClick={(e) => {
              e.preventDefault();
              navigate(`/userexplore/${user._id}`)
            }}
            
            >
              <div className="see-other-karobars">
                See other karobars by this profile
              </div>
            </button>


          {/* <div className="virat-kohli">{user.username}</div>
          <div className="virat-kohli1">{`Virat Kohli `}</div>
          <div className="people">Owner Name :</div>
          <div className="virat-kohli2">{`Virat Kohli `}</div>
          <div className="people1">Type :</div>
          <div className="divider5" />
          
          <div className="profile2">G E N E R A L I N F O R M A T I O N</div>
          <h2 className="people2">NAME OF ORGANIZATION</h2>
          <div className="div3">100</div>
          <div className="div4">9865452365</div>
          <div className="contact5">Contact Number :</div>
          <div className="people3">No. of people :</div>
          <div className="div5">100</div>
          <div className="div6">100</div>
          <div className="people4">Uploaded by :</div>
          <div className="people5">Gender of owner :</div>
          <img
            className="profile-image-icon"
            alt=""
            src="/profileimage@2x.png"
          />
          <div className="email2">No. of Branches :</div>
          <button className="see-other-karobars-btn">
            <div className="see-other-karobars">
              See other karobars by this profile
            </div>
          </button> */}

          

        </div>

        <div className="photos">
          <div className="photos1" style={{ display: 'flex' }}>

            {
              (karobar.karobarphotos!=undefined &&karobar.karobarphotos!='' )
              ?
              karobar.karobarphotos.map((photo) => {
                return(
                  <img 
                  style={{ height: '100%', width:'auto', position: 'relative', padding:'0 4px' }} 
                  className="sample-photo" 
                  src={`/serverImages/${photo}`} />
                )
              })
              :
              <div style={{ height: '100%', width:'auto'}} className="sample-photo" > No gallery added. </div>
            }

          </div>
            {/* <button className="button">{`<`}</button>
            <button className="button1">{`<`}</button> */}
        </div>

      </section>


{
  (karobar.branchData) ?
  karobar.branchData.map((branch)=>{
    return(
        <section className="branch-box">
        <div className="yellow-box-before5" />
        <div className="profile3">B R A N C H &nbsp;&nbsp; D E T A I L S</div>
        <div className="divider6" />

        <div className="contact-address-inputs">

          <div className="contact6">Contact of branch :</div><div className="virat-kohli3">{branch.brContact}</div>

          <div className="address1">Working Area / Address :</div>
          <div className="address-input" style={{  color:'var(--color-gray-100)'}} > {branch.brAddress} </div>

        </div>

        <div className="view-add-info">
          <div className="address">
            Additional Information:
          </div>

        {
          branch.additionalInfo.map((info) => {
            return(
              <div 
              className="additional-tag-input" 
              style={{ backgroundColor: 'transparent', color:'var(--color-gray-100)', boxShadow:'none', height:'auto'}}
              >
              
          {
              (info.tag) ? `${info.tag}:` : "N.A."
          }
              
              <p> {info.description} </p>


              </div>
              
            )
          })
        }
        </div>
       
      </section>
    )
  })
  : <></>
}
      
    
    
    {/* <ViewBranchBox cssclass="branch-box" karobar={karobar}/> */}

     <Footer cssclass="footer8"/>
      <button className="back-btn" onClick={(e) => {
        e.preventDefault();
        navigate('/explorepage')
      }} />
    </div>
  );
};

export default ViewPage;










// import "../CSS/ViewPage.css";
// import "../CSS/UploadStep2.css";
// import {Header} from "../components/Header"
// import {Footer} from "../components/Footer"
// import {ViewBranchBox} from "../components/ViewBranchBox"
// import React from 'react'

// const ViewPage = () => {
//   return (
//     <div className="view-page">
//       <Header cssclass="navbar" />

//       <img className="logo-1-icon4" alt="" src="/logo-12@2x.png" />
//       <section className="auto-layout-yellow-box">
//         <div className="yellow-box4">
//           <div className="yellow-box-before4" />
//           <div className="virat-kohli">{`Virat Kohli `}</div>
//           <div className="virat-kohli1">{`Virat Kohli `}</div>
//           <div className="people">Owner Name :</div>
//           <div className="virat-kohli2">{`Virat Kohli `}</div>
//           <div className="people1">Type :</div>
//           <div className="divider5" />
//           <div className="profile2">G E N E R A L I N F O R M A T I O N</div>
//           <h2 className="people2">NAME OF ORGANIZATION</h2>
//           <div className="div3">100</div>
//           <div className="div4">9865452365</div>
//           <div className="contact5">Contact Number :</div>
//           <div className="people3">No. of people :</div>
//           <div className="div5">100</div>
//           <div className="div6">100</div>
//           <div className="people4">Uploaded by :</div>
//           <div className="people5">Gender of owner :</div>
//           <img
//             className="profile-image-icon"
//             alt=""
//             src="/profileimage@2x.png"
//           />
//           <div className="email2">No. of Branches :</div>
//           <button className="see-other-karobars-btn">
//             <div className="see-other-karobars">
//               See other karobars by this profile
//             </div>
//           </button>

          

//         </div>

//         <div className="photos">
//             <div className="photos1">
//               <div className="sample-photo" />
//             </div>
//             <button className="button">{`<`}</button>
//             <button className="button1">{`<`}</button>
//           </div>

//       </section>


// {/* 
//       <section className="branch-box">
//         <div className="yellow-box-before5" />
//         <div className="address">
//           Additional Information (Timings, Cost, etc.) :
//         </div>
//         <div className="profile3">B R A N C H - 1</div>
//         <div className="contact-address-inputs">
//           <div className="contact6">Contact of branch :</div>
//           <div className="address1">Working Area / Address :</div>
//           <div className="address-input" />
//           <div className="virat-kohli3">{`Virat Kohli `}</div>
//           <button className="open-maps-button">
//             <div className="open-maps">Open Maps</div>
//           </button>
//         </div>
//         <div className="address-input1" />
//         <div className="divider6" />
//       </section> */}
    
    
//     <ViewBranchBox cssclass="branch-box"/>

//      <Footer cssclass="footer8"/>
//       <button className="back-btn" />
//     </div>
//   );
// };

// export default ViewPage;
