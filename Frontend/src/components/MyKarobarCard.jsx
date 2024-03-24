import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clipboardCopy from 'clipboard-copy';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


export const MyKarobarCard = ({ user, karobars }) => {

  const navigate = useNavigate()

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

  const sendKarobarData = async(e,userId,karobarId) => {
    e.preventDefault()
   
    navigate(`/viewpage?karobarId=${karobarId}&userId=${userId}`)
  }

  const editKarobar = async(e, karobarId) =>{
    e.preventDefault();
    navigate(`/updatepage/${karobarId}`)
  }
  const deleteKarobar = async(e, karobarId) =>{
    e.preventDefault();

    const isConfirmed = window.confirm('Are you sure you want to delete this karbar?');

    if(isConfirmed){
      const response = await fetch( "http://localhost:5000/api/deleteKarobar", {
        method: "DELETE",
        body: JSON.stringify({ userId: user._id, karobarId }),
        headers: {'Content-Type': 'application/json' }
      })

      const data = await response.json();
      if(data.status===200){
        toast(data.msg, {
          onClose: () => {
            window.location.reload()
          },
          className: 'foo-bar',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
      else {
        toast(`Error Occured ! Try later. ${data.msg}`, {
          className: 'foo-bar',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    }
  }
  
  return (
    <>

      {
        (karobars!="" && karobars) ?
          karobars.map((karobar) => {

            return(
              <>

              <div className="my-karobar-card">
              {
                (karobar.profilephoto == "" || karobar.profilephoto == null) ?
                  <img
                    className="profile-image-icon2"
                    src="/profileimage1@2x.png"
                  />
                  :
                  <>
                  <img
                    className="profile-image-icon2"
                    src={`/serverImages/${decodeURIComponent(karobar.profilephoto)}`}
                  />
                  </>
              }

              <b className="profile14">{ karobar.orgName }</b>
              <div className="profile15">Owned by {`   `}: {`   `}{karobar.ownerName}</div>
              <div className="profile16">Branch(es){`   `}: {`   `} {karobar.no_of_branches} </div>
              <div className="profile17">Email {`   `}: {`   `} {karobar.orgEmail}</div>

              <div className="profile18"> Contact(s) {`   `}: {`   `}
              {
                ( karobar.branchData ) ?
                karobar.branchData.map((bd) => {
                  return (bd.brContact)
                })
                :
                "N.A."
              }
              </div>


              <button className="edit-btn" onClick={(e) => editKarobar(e, karobar._id)}>
                <div className="profile19"><img style={{ width: "12px", padding: "0 5px 0 0" }} src="/icons/edit.png" /> E D I T </div>
              </button>

              <button className="share-btn" onClick ={(e)=> handleCopy(e,user._id, karobar._id)}>
                <div className="profile20"><img style={{ width: "12px", padding: "0 5px 0 0" }} src="/icons/share.png" />S H A R E</div>
              </button>

              <button className="delete-btn" onClick={(e) => deleteKarobar(e, karobar._id)}>
                <div className="profile20"><img style={{ width: "12px", padding: "0 5px 0 0" }} src="/icons/bin.png" />E N D</div>
              </button>

              <button className="view-btn" onClick = {(e) => sendKarobarData(e,user._id,karobar._id)}>
                <div className="profile20"><img style={{ height: "15px", padding: "0 5px 0 0" }} src="/icons/eye.png" />V I E W</div>
              </button>

            </div >
          </> )
          })
          :
          <>
          <Link to = "/uploadstep1">
           <button style={{
            display: "flex",
            backgroundColor:"#faffb7",
            color: "brown",
            width: "150%",
            height: "100px",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            cursor: "pointer"
          }}>
            You have no karobars yet, Upload now !
          </button> 
          </Link>
          </>

      }

    </>
  )
}
