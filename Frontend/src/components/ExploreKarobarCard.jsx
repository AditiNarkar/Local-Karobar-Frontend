import React from 'react'
import { useNavigate } from "react-router-dom";
import clipboardCopy from 'clipboard-copy';


export const ExploreKarobarCard = ({users}) => {

  const handleCopy = async (e,userId,karobarId) => {
    const link = `http://localhost:3000/viewpage?karobarId=${karobarId}&userId=${userId}`
    e.stopPropagation()
    try {
      await clipboardCopy(link);
      alert('Link copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  }
  
  const navigate = useNavigate()
  const sendKarobarData = async(e,userId,karobarId) => {
    e.preventDefault()
   
    navigate(`/viewpage?karobarId=${karobarId}&userId=${userId}`)
  }
  return (
    <>
    {
    
    (users && users!={} && users!='' &&users!=[]) ?
    users.map((user)=> {
      return(
        user.karobars.map((karobar, index)=>{
        return(
        <>
        
        <div className="explore-karobar-card" key={index} onClick = {(e) => sendKarobarData(e,user._id,karobar._id)} >
          {
            (karobar.profilephoto && karobar.profilephoto !="")?
              <img
                className="profile-image-icon7"
                src={`../serverImages/${karobar.profilephoto}`}
              />
              :
              <img
                className="profile-image-icon7"
                alt=""
                src="/profileimage1@2x.png"
              />
          }

            <b className="profile51">{karobar.orgName}</b>
            <div className="profile52" style={{top:'65px'}} >Owned by: {karobar.ownerName}</div>
            <div className="profile52" style={{top:'42px'}} >Type: {karobar.category}</div>


            <div className="profile53" style={{top:'94px', height: '54px'}} >Branch Address:
            {
            (karobar.branchData.map((bd)=>{
              return(
                bd.brAddress
              )
            }))
            }
            </div>

            <button className="share-btn-explore" onClick ={(e)=> handleCopy(e,user._id, karobar._id)}>
              <div className="profile54"><img style={{width:"12px", padding:"0 5px 0 0"}} src="/icons/share.png"/>S H A R E</div>
            </button>
            <button className="open-maps-btn-explore">
              <div className="profile55"><img style={{width:"12px", padding:"0 5px 0 0"}} src="/icons/location-pin.png"/>L O C A T E</div>
            </button>
        </div>
        </>
        ) // return
        } // map
          )
    )//return
  }
    )
    :
    <div style={{display:'flex', alignItems:'center', width:"100%", justifyContent:'center'}}>No Karobar found.</div>//map
}
  
    </>
  )
}









// import React from 'react'

// export const ExploreKarobarCard = () => {
//   return (
//     <div className="explore-karobar-card">
//           <img
//             className="profile-image-icon7"
//             alt=""
//             src="/profileimage1@2x.png"
//           />
//           <b className="profile51">Name of Organization</b>
//           <div className="profile52">Owned by:</div>
//           <div className="profile53">Nearest branch address:</div>
//           <button className="share-btn-explore">
//             <div className="profile54"><img style={{width:"12px", padding:"0 5px 0 0"}} src="/icons/share.png"/>S H A R E</div>
//           </button>
//           <button className="open-maps-btn-explore">
//             <div className="profile55"><img style={{width:"12px", padding:"0 5px 0 0"}} src="/icons/location-pin.png"/>L O C A T E</div>
//           </button>
//         </div>
//   )
// }
