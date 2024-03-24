import {React, useState} from 'react'
import { UploadAdditionalInfo } from './UploadAdditionalInfo'

export const UploadBranchBox = ({cssclass, sendDataToParent}) => {
  /*const [karobar, setKarobar] = useState({branchContact: "", branchAddress: ""})

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value

    setKarobar({...karobar,[name]:value });
  }*/


  const [branchContact, setBC] = useState("");
  const [branchAddress, setBA] = useState("");

  const contact = (e) => {
    const childContact = e.target.value
    setBC(childContact);
    sendDataToParent(childContact,branchAddress)
  };

  const address = (e) => {
    const childAddress = e.target.value
    setBA(childAddress);
    sendDataToParent(branchContact,childAddress)
  };

 
 
    
  
  return (
    <section className={cssclass}>
        <div className="yellow-box-before10">
          <div className="profile69">B R A N C H  &nbsp;&nbsp;&nbsp; D E T A I L S</div>

        </div>
        <div className="divider14" />


        <div className="contact-address-inputs4">

          <div className="contact18">Contact of branch :</div>
          <input className="branch-contact" value={branchContact} onChange={contact} name='branchContact'  type="text" />

          <div className="address5">Working Area / Address :</div>
          <textarea className="address-input4" value={branchAddress}  onChange={address} name='branchAddress' />

          <button className="open-maps-button20">
            <div className="use-maps1">Open Maps</div>
          </button>

        </div>
        
        <div className="upload-right-side">
          <div className="address4">
            Additional Information :
          </div>
          <UploadAdditionalInfo />

          {/* <input placeholder="Add Tag (Timings, Cost, etc.)" className="additional-tag-input" type="text" />
          <div style={{height:"10px"}}/>
          <textarea placeholder="Add Description..." className="additional-info-desc-input" />

          <div style={{ width:"550px", height:"1px", marginTop:"10px",marginBottom:"10px", background:"darkgreen", display:"flex", justifyContent:"left"}}></div>
          */}
          <button className="upload-additional-info-btn">
            <div className="use-maps1">+</div>
          </button> 


        </div>
        
      </section>
  )  }

  
