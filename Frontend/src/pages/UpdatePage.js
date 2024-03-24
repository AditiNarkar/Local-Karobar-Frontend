import "../CSS/ViewPage.css";
import "../CSS/UploadStep2.css";
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import {ViewBranchBox} from "../components/ViewBranchBox"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const UpdatePage = () => {

  const navigate = useNavigate();
  const getKarobarURL = "http://localhost:5000/api/karobarData"  

  const [karobar, setKarobar] = useState({})
  const [newKarobar, setnewKarobar] = useState({ })

  const [user, setUser] = useState({})

  const karobarId = window.location.pathname.split('/').pop();

  if(!karobarId){
    toast("Inaccessible !", {
      onClose: () => {
        navigate('/mykarobarspage')
      },
      className: 'foo-bar',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    return
  }

  const getKarobarData = async() => {
    try{
      const res = await fetch(getKarobarURL,{
        method: "POST", 
        body: JSON.stringify({ karobarId }),
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json()
     
      if(data.status != 200){
        toast(data.msg, {
          className: 'foo-bar',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
      else{
        setKarobar(data.karobar.karobars[0])
        setnewKarobar(data.karobar.karobars[0])
        setUser(data.user)
      }
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    getKarobarData();
  }, [])

  
  const handleInputs = (e) => {
    const { name, value } = e.target
    setnewKarobar({ ...newKarobar, [name]: value });
  }
  
  const [newprofilephoto, setnewprofilephoto] = useState(null)
  const [gallery, setGallery] = useState(null)

  return (
    <form method="POST" encType = "multipart/formdata">
    <ToastContainer toastStyle={{ color: "#874d00", boxShadow:"12px 12px 2px 1px #453400;", fontSize: "18px", borderRadius: "20px"}} />

    <div className="view-page">
      <Header cssclass="navbar" data={user.username}/>

      <img className="logo-1-icon4" alt="" src="/logo-12@2x.png" />
      <section className="auto-layout-yellow-box">
        <div className="yellow-box4" style={{ height: '334px'}}>
          <div className="yellow-box-before4" />

          <div className="people4">Uploaded by :</div>
          <input 
            className="virat-kohli" 
            name="username"
            style={{
              left: '775.5px',
              width: '393px',
              height: '30px',
              color:  'black',
              //fontSize: '16px'
            }} 
            value={ user.username }
            disabled
          />
          
          <div className="people">Owner Name :</div>
          <input 
            className="virat-kohli1" 
            name="ownerName" 
            style={{
              left: '775.5px',
              width: '393px',
              height: '30px',
              color:  'black',
              //fontSize: '16px'
            }}
            value={ newKarobar.ownerName }
            onChange={handleInputs}
          />

          <div className="people1">Type :</div>
          <input 
            className="virat-kohli2" 
            style={{
              top: '12px',
              left: '775.5px',
              width: '393px',
              height: '30px',
              color:  'black',
              //fontSize: '16px'
            }}
            value={ newKarobar.category }
            disabled
          />

          <div className="divider5" />
          <div className="profile2">G E N E R A L &nbsp;&nbsp;&nbsp; I N F O R M A T I O N</div>
          <input className="people2" style={{ width: '505px', top:'260px', fontSize:'50px', height:'40px' }} name="orgName" value={ newKarobar.orgName } onChange={handleInputs}/>

          <div className="people3">No. of people :</div>
          <input 
            type="number"
            min='1' max='50'
            className="div3" 
            name="no_of_people" 
            style={{
              top: '218px',
              left: '818.5px',
              width: '97px',
              height: '30px',
            }}
            value={ newKarobar.no_of_people }
            onChange={handleInputs}
          />

          <div className="contact5">Email address :</div>
          <input 
            className="div4" 
            name="brContact" 
            style={{
              left: '818.5px',
              width: '349px',
              height: '30px',
              color: 'black'
            }}
            value={ newKarobar.orgEmail }
            disabled
          />


          {/* <input className="div5" value='100' /> */}
          <div className="people5">Gender of owner :</div>
          <select className="div5" name ="gender" value={ newKarobar.gender } onChange={handleInputs}>
            <option >Male</option>
            <option >Female</option>
            <option >Others</option>
          </select>

          <div className="email2">No. of Branches :</div>
          <input min='1' max='10' type='number' style={{ top: '253px' }} className="div6" name="no_of_branches" value={newKarobar.no_of_branches} onChange={handleInputs}/>

          {
            (newprofilephoto) ?
              <img
              className="profile-image-icon"
              src={ URL.createObjectURL(newprofilephoto) }
              />
            :
            (newKarobar.profilephoto && newKarobar.profilephoto!="") ?
            <img
            className="profile-image-icon"
            src={`/serverImages/${karobar.profilephoto}`}
            />
            :
            <img
              className="profile-image-icon"
              src="/profileimage@2x.png"
            />
          }
          <input style={{cursor: 'pointer', opacity: '0'}} className="profile-image-icon" name="profilephoto" accept="image/*" type="file" onChange={ (e)=> {
            setnewprofilephoto(e.target.files[0]);
            const updatedData = {...newKarobar}
           updatedData.profilephoto = ""
            setnewKarobar(updatedData)
          }} />


          {/* <button className="see-other-karobars-btn">
            <div className="see-other-karobars">
              See other karobars by this profile
            </div>
          </button> */}

        </div>

        <div className="contact17" style={{ top:'460px', left:'80px' }}>Gallery :</div>

        <input name="karobarphotos" style={{  top: '460px', left: '175px', zIndex:'40' }} className="add-photos-input-upload" accept="image/*" type="file" multiple onChange={(e)=> {
            setGallery(e.target.files);
            const updatedData = {...newKarobar}
            updatedData.karobarphotos = ""
            setnewKarobar(updatedData)
        }}/>

        <div className="photos">
            <div className="photos1" style={{ top: '43px', height: '150px', display: 'flex' }}>
              {
                (gallery) ?
                Array.from(gallery).map((i)=> {
                  return (
                  <img 
                    className="sample-photo" 
                    src= {URL.createObjectURL(i)} 
                    style={{ height: '100%', width:'auto', position: 'relative', padding:'0 4px' }} 
                  />
                  )
                })
                :
                (newKarobar.karobarphotos && newKarobar.karobarphotos != "") ?
                (newKarobar.karobarphotos.map((photo) => {
                  return (
                    <img 
                    style={{ height: '100%', width:'auto', position: 'relative', padding:'0 4px' }} 
                    className="sample-photo" 
                    src={`/serverImages/${photo}`} />
                  )
                
                }))
                :
                <div style={{ height: '100%' }} className="sample-photo" > No gallery added. </div>
              }


            </div>
            {/* <button className="button">{`<`}</button>
            <button className="button1">{`<`}</button> */}
          </div>

      </section>


    
      <section className="branch-box">
        <div className="yellow-box-before5" />
        <div className="profile3">B R A N C H &nbsp;&nbsp;&nbsp;  D E T A I L S</div>
        <div className="divider6" />

        {
          (newKarobar.branchData) ?
          Array.from(newKarobar.branchData).map((bd, index)=> {
            return(
            <>
            <div className="contact-address-inputs">
            <div className="contact6">Contact of branch :</div>
            <input  
              name="brContact"
              className="virat-kohli3"
              value={ bd.brContact }
              
              onChange={(e) => {
                const updatedData = {...newKarobar}
                const itemToUpdate = updatedData.branchData.find(branch => branch._id === bd._id)
                itemToUpdate.brContact = e.target.value
                setnewKarobar(updatedData)
              }}
            />

            <div className="address1">Working Area / Address :</div>
            <textarea 
              className="address-input4" 
              name="brAddress" 
              value={ bd.brAddress} 

              onChange={(e) => {
                const updatedData = {...newKarobar}
                const itemToUpdate = updatedData.branchData.find(branch => branch._id === bd._id)
                itemToUpdate.brAddress = e.target.value
                setnewKarobar(updatedData)
              }}

            />

            {/* <button className="open-maps-button"><div className="open-maps">Open Maps</div></button> */}

            </div>
            <div className="view-add-info">
            <div className="address">Additional Information:</div>
              {
                (bd.additionalInfo.map((info, index2)=>{
                  return(
                    <>
                    <input 
                      placeholder="Add Tag (Timings, Cost, etc.)" 
                      className="additional-tag-input"  
                      name = "tag" 
                      value= {info.tag} 
                      type="text" 
                      onChange={(e) => {
                        const updatedKarobar = { ...newKarobar };
                        updatedKarobar.branchData[index].additionalInfo[index2].tag = e.target.value;
                        setKarobar(updatedKarobar);
                      }
                      }
                    />

                    <div style={{height:"10px"}}/>

                    <textarea 
                      placeholder="Add Description..." 
                      className="additional-info-desc-input" 
                      name = "description" 
                      value= {info.description} 
                      onChange={(e) => {
                        const updatedKarobar = { ...newKarobar };
                        updatedKarobar.branchData[index].additionalInfo[index2].description = e.target.value;
                        setKarobar(updatedKarobar);
                      }
                      }
                    />
                    </>
                  )
                }))
              }
            </div>
            </>
            )
          })
          :
          <><div className="contact-address-inputs">No Gallery posted.</div></>
        }
        

      </section>
    
    
    {/* <ViewBranchBox cssclass="branch-box"/> */}

      <button className="upload-button2" 
        onClick={ async (e) => {
          e.preventDefault();

          const editMyKarobarURL = "http://localhost:5000/api/saveEditMyKarobar"

          const response = await fetch(editMyKarobarURL, {
            method: 'POST',
            headers: {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({ userId: user._id, karobarId, newKarobar } )
          })

          const data = await response.json()
          if( data.status === 200)
          {
            toast(data.msg, {
              className: 'foo-bar',
              onClose: () => {
                navigate("/mykarobarspage")
              },
              autoClose: 5000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            })

            if(gallery || newprofilephoto){

              const formData = new FormData()
              formData.append("profilephoto", newprofilephoto)
              formData.append("karobarId", karobarId)
              formData.append("userId", user._id)

              if(gallery){
                const input = document.querySelector('input[name="karobarphotos"]')
                if(input.files){
                  for (const file of input.files) {
                    formData.append("karobarphotos", file)
                  }
                }
              }

              const editMyKarobarPhotosURL = "http://localhost:5000/api/saveEditMyKarobarPhotos"

              const response2 = await fetch(editMyKarobarPhotosURL, {
                method: "POST",
                body: formData,
              })

              const data2 = await response2.json()

              if(response2.status == 200){
                toast(data2.msg, {
                  onClose: () => {
                    navigate('/mykarobarspage')
                  },
                  className: 'foo-bar',
                  autoClose: 5000,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                })
              }
            }
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
        }}
      >
      <div className="upload-my-karobar">Save & Update</div>
      </button>

      <button className="upload-button2" 
        onClick={(e) => {
          e.preventDefault();
          //window.alert("Karobar Data was not updated.")
          //window.location.href = 'http://localhost:3000/mykarobarspage'

          toast("Karobar Data was not updated.", {
            onClose: () => {
              navigate('/mykarobarspage')
            },
            className: 'foo-bar',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        }}
      >
      <div className="upload-my-karobar">Back</div>
      </button>

     <Footer cssclass="footer8"/>
      <button className="back-btn" onClick={(e) => {
        e.preventDefault();
        navigate('/mykarobarspage')
      }} />
    </div>
    </form>
  );
};

export default UpdatePage;
