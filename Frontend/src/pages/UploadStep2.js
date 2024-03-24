import "../CSS/UploadStep2.css";
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const UploadStep2 = () => {

  const [karobar, setKarobar] = useState({
    orgName: "", no_of_people: 1, orgEmail: "", otp: "", gender: "Male", brContact: "",
     brLat:"", brLng: "", addTag: "", addDesc: ""
  })

  // const { selectedPlace } = 
  //   (localStorage.getItem('mapsAddress') && localStorage.getItem('mapsAddress') !='') ? 
  //     JSON.parse(localStorage.getItem('mapsAddress')) 
  //   : {}

  const [ brAddress, setBrAddress] = useState(
    localStorage.getItem('mapsAddress') || ""
  );

  //console.log("brAdress", brAddress)
  
  //const [ selectedPlace2, setSelectedPlace ] = useState(selectedPlace || {})

  const handleInputs = (e) => {
    const { name, value } = e.target
    setKarobar({ ...karobar, [name]: value });
  }


  const handleInputChange = (e) => {
    setBrAddress(e.target.value);
    localStorage.setItem('mapsAddress',(e.target.value));
  };

  // Add an event listener to detect changes in localStorage
  useEffect(() => {
    const storageChangeHandler = (e) => {
      if (e.key === 'mapsAddress') {
        setBrAddress(e.newValue);
        //console.log("newValue", e.newValue)
      }
    };

    window.addEventListener('storage', storageChangeHandler);

    return () => {
      window.removeEventListener('storage', storageChangeHandler);
    };
  }, []);



  const step2URL = "http://localhost:5000/api/uploadstep2process"
  const step2URL_2 = "http://localhost:5000/api/uploadInUploads"
  
  const [otp, setOtp] = useState("")


  var [username, setUsername] = useState()
  const [dbuserId, setuserId] = useState("")

  const getData = async () => {
    try{
      const res = await fetch(step2URL,{
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type" : "application/json"
        },
        credentials: "include"
      })
      const data = await res.json()
      setUsername(data.rootUser.username)
      setuserId(data.Id)
      //setEmail(data.rootUser.email)
      

      if(!res.status == 200){
        const error = new Error(res.error)
        throw error

      }
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=> {
    getData();
  },[])


  const sendotpURL = "http://localhost:5000/api/generateotp"
  const sendOTP = async(e) => {
    e.preventDefault()
    const response = await fetch(sendotpURL, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({orgEmail})
    
    })

    const data = await response.json()

    if(data.status==201){
      toast(data.msg, {
        className: 'foo-bar',
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
    else{
      toast(data.msg, {
        className: 'foo-bar',
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  const [verifiedOTP, setVerifiedOTP] = useState(0);
  const verifyotpURL = "http://localhost:5000/api/verifyotp"
  const verifyOTP = async(e) => {
   // console.log("server otp is " , otp)
    e.preventDefault()
    const response = await fetch(verifyotpURL, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({otp})
    
    })

    const data = await response.json()

    if(data.status==201){
      toast(data.msg, {
        className: 'foo-bar',
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      //console.log("otp in posttt",data.code)
      setVerifiedOTP(1)
      const otpfield = document.querySelector("#otp");
      const send = document.querySelector("#sendotp");
      const verify = document.querySelector("#verifyotp");

      otpfield.disabled = true
      send.disabled = true
      verify.disabled = true

    }
    else{
      toast(data.msg, {
        className: 'foo-bar',
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  const navigate = useNavigate()

  const karobarInfo = localStorage.getItem('karobarInfo')
  const { category, orgEmail, ownerName } = JSON.parse(karobarInfo)

  const [profilephoto, setImage1] = useState(null)
  const [karobarphotos, setImage2] = useState(null)


  const postKarobar = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const { orgName, no_of_people, otp, gender, brContact, brLat, brLng, addTag, addDesc } = karobar //addition

     //addition
    const input = document.querySelector('input[name="karobarphotos"]')
    if(input.files){
      for (const file of input.files) {
        formData.append("karobarphotos", file)
      }
    }
    
    if (profilephoto)
      formData.append("profilephoto", profilephoto)
    else
      formData.append("profilephoto", " ")

    formData.append('orgName', orgName)
    formData.append('noOfPeople', no_of_people)
    formData.append('orgEmail', orgEmail)
    formData.append('otp', otp)
    formData.append('gender', gender)
    formData.append('brContact', brContact)
    formData.append('brAddress', brAddress)
    formData.append('addTag', addTag)
    formData.append('addDesc', addDesc)
    formData.append('counter', counter)
    formData.append('category', category)
    formData.append('ownerName', ownerName)
    formData.append('brLat', brLat)//addition
    formData.append('brLng', brLng)

    formData.append("username", username)
    formData.append("userId", dbuserId)

    const urlEncoded = new URLSearchParams(formData).toString();

    const response = await fetch(step2URL, {
      method: "POST",
      body: urlEncoded,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        //'Content-Type': 'multipart/form-data; boundary=MyBoundary'
      }
    })

    const data = await response.json();
    //console.log(data.status)

    //addition
    if (data.status == 200) {
     localStorage.setItem('karobarInfo', '')
     localStorage.setItem('mapsAddress', '')

      formData.append("karobarIndex", data.karobarIndex)
      formData.append("branchIndex", data.branchIndex) 

      const response2 = await fetch(step2URL_2, {
        method: "POST",
        body: formData,
      })

      const data2 = await response2.json();
     // console.log("fghj", data2.status, data2.msg)
      if (data2.status == 200) {
        toast(data2.msg, {
          className: 'foo-bar',
          onClose: () => {
            navigate("/mykarobarspage")
          },
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
      else {
        toast(data2.msg, {
          className: 'foo-bar',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    }
    else {
      toast(data.msg, {
        className: 'foo-bar',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  const [counter, setCounter] = useState(1)
  const minCount = 1;  
  const maxCount = 10; 

  const increment = (e) => {
    e.preventDefault()
    if (counter < maxCount) {
      setCounter(counter + 1);
    }
    if(counter==10){
      toast("Branch limit reached", {
        className: 'foo-bar',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }
  const decrement = (e) => {
    e.preventDefault()
    if (counter > minCount) {
      setCounter(counter - 1);
    }
  }


  const handleImage1 = (e) => {
    setImage1(e.target.files[0]);
  }

  const handleImage2 = (e) => {
    setImage2(e.target.files);
  }

  const openMaps = (e) => {
    e.preventDefault();
    window.open('http://localhost:3000/maps', '_blank');
  }
  
  return (


    <form method="POST" encType = "multipart/formdata">
    <ToastContainer toastStyle={{ color: "#874d00", boxShadow:"12px 12px 2px 1px #453400;", fontSize: "18px", borderRadius: "20px"}} />
      
    <div className="upload-step2">

        {/* <header className="navbar8">
          <div className="nav-links8">
            <div className="contact14">Contact</div>
            <div className="about8">{`About `}</div>
            <div className="home8">Home</div>
          </div>
          <button className="logout-2-15" />
        </header> */}

        <Header cssclass="navbar" data = {username}/>

        <div className="title1">
          <img className="logo-1-icon8" alt="" src="/logo-12@2x.png" />
          <div className="add-text2">UPLOAD MY KAROBAR</div>
          <div className="add-text3">STEP - 2</div>
        </div>
        
        <section className="yellow-box6">
          <div className="yellow-box-before9">
            <div className="profile66">G E N E R A L </div>
            <div className="profile67" >Name of Organization* :</div>
            <input className="org-name-ip" value={karobar.orgName} type="text" onChange={handleInputs} name= "orgName" />
          </div>

          <div className="inputs">
            <div className="gender1">Gender of owner* :</div>
            <select className="gender-input1" id="" name = "gender" value={karobar.gender} onChange={handleInputs}>
              <option >Male</option>
              <option >Female</option>
              <option >Others</option>
            </select>
            {/* <input className="gender-input1" type="text" /> */}

            <div className="people7">No. of people* :</div>
            <input className="people-input1" type="number" value={karobar.no_of_people} onChange={handleInputs} name= "no_of_people" />
          </div>

          <div className="contact-inputs2">
            <input className="contact-input4" type="text" value={orgEmail} onChange={handleInputs} name= "orgEmail" disabled= "true"/>
            <div className="contact15">Email address :</div>
          </div>
          <div className="otp">
            <input className="otp-input" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} name = "otp"  id="otp"/>
            <div className="contact16">OTP* :</div>
          </div>
         
          
          <div className="profile-section1">
            <input className="profile-input3" name="profilephoto" accept="image/*" onChange={handleImage1} type="file" />
            <div className="profile68"  >Profile Photo :</div>


{/* addition */}
            {(profilephoto) ?
              <img
                className="profile-image-icon10"
                src={URL.createObjectURL(profilephoto)}
              />
              :
              <img
                className="profile-image-icon10"
                src="/profileimage@2x.png"
              />
            }

          </div>

{/* addition */}

          <div className="contact17">Add gallery :</div>
          <input name="karobarphotos" className="add-photos-input-upload" accept="image/*" onChange={handleImage2} type="file" multiple />
          <div className="photos3">
            {
              
              (karobarphotos)? 
                
              Array.from(karobarphotos).map((i)=> {
                return (
                <img 
                  className="sample-photo2" 
                  src= {URL.createObjectURL(i)} 
                />
                )
              })
              : 
              <div className="sample-photo2" > No photos selected. </div>
            }
          </div>



          <div className="branches-input">
            <div className="email7">No. of Branches* :</div>
            <input className="branch-input" type="text" min="1" max="10" value={counter} name = "no_of_branches"/>
            <button className="minus-button1" onClick={(e) => decrement(e)}>
              <div className="div10">-</div>
            </button>
            <button className="plus-button2" onClick={(e) => increment(e)} >
              <div className="div10">+</div>
            </button>
          </div>



          <button className="button4">{`<`}</button>
          <button className="button5">{`<`}</button>
          <button className="send-otp-btn" name="sendotp" id="sendotp" onClick={sendOTP}>
            <div className="verify-button3">Send OTP</div>
          </button>
          <button className="verify-otp-btn"name="verifyotp" id="verifyotp" onClick={verifyOTP} >
            <div className="verify-button3" >Verify OTP</div>
          </button>
          
        </section>

      {/* <UploadBranchBox */}
          <div className="upload-side-branch-box">
            <div className="yellow-box-before10">
              <div className="profile69">B R A N C H  &nbsp;&nbsp;&nbsp; D E T A I L S</div>
            </div>
              <div className="divider14" />
                <div className="contact-address-inputs4">

                <div className="contact18">Contact of branch* :</div>
                <input className="branch-contact" value={karobar.brContact} onChange={handleInputs} name='brContact'  type="text" />

                <div className="address5">Working Area / Address*: </div>
                <textarea 
                  className="address-input4" 
                  style={{ fontFamily: 'Arial'}}
                  value={
                    brAddress
                  } 
                  onChange={handleInputChange} 
                  name='brAddress' 
                />

                <button className="open-maps-button20" onClick={openMaps}>
                  <div className="use-maps1">Open Maps</div>
                </button>

              </div>
              
              <div className="upload-right-side">
                <div className="address4">
                  Additional Information :
                </div>
                {/* <UploadAdditionalInfo /> */}

                <input placeholder="Add Tag (Timings, Cost, etc.)" className="additional-tag-input"  name = "addTag" value= {karobar.addTag}
                onChange={handleInputs}  type="text" />
                <div style={{height:"10px"}}/>
                <textarea style={{ fontFamily: 'Arial'}} placeholder="Add Description..." className="additional-info-desc-input" name = "addDesc" value= {karobar.addDesc}
                onChange={handleInputs} />

                <div style={{ width:"550px", height:"1px", marginTop:"10px",marginBottom:"10px", background:"darkgreen", display:"flex", justifyContent:"left"}}></div>
                {/* <button className="upload-additional-info-btn">
                  <div className="use-maps1">+</div>
                </button>  */}


              </div>
            </div>  
        



        {/* <button className="add-branch-btn" onClick={(e) => increment(e)}>
          <div className="div12">+</div>
        </button> */}
       <button className="upload-button2" onClick={(e) => postKarobar(e)}>
          <div className="upload-my-karobar">Upload My Karobar</div>
        </button>
        

      <Footer cssclass="footer8"/>

    </div>

    </form>
  );
};

export default UploadStep2;