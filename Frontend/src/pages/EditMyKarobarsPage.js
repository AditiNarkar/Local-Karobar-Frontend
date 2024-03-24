import "../CSS/EditMyKarobarsPage.css";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import {ProfileLeftNav} from "../components/ProfileLeftNav"
import {EditBranchBox} from "../components/EditBranchBox"
import React from 'react'


const EditMyKarobarsPage = () => {
  return (
    <div className="edit-my-karobars-page">
      <Header cssclass="navbar"/>
      {/* <header className="navbar5">
        <div className="nav-links5">
          <div className="contact7">Contact</div>
          <div className="about5">{`About `}</div>
          <div className="home5">Home</div>
        </div>
        <button className="logout-2-12" />
        <div className="profile4">Signed In as: Username</div>
      </header> */}
      <main className="right-side">
        <section className="search-list">
          <div className="name-and-email1">

          <div className="name1"> Owner Name :</div>
          <input type="text" className="name-input1" />

          <div className="email3">Email : </div>
          <input type="email" div className="email-input5" />

          <div className="email4">Type :</div>
            <input type="text" className="type-input" />

            <div className="email5">If other :</div>
            <input type="text" className="ifother-input" />
          </div>

          <div className="yellow-box5">
            <div className="yellow-box-before6" />
            <div className="profile5">G E N E R A L </div>
            <div className="profile-section">

              <div className="profile6">Profile Photo :</div>
              <input type="file" className="profile-input" />
              <img
                className="profile-image-icon1"
                alt=""
                src="/profileimage3@2x.png"
              />

            </div>
            <div className="contact8">Add photos :</div>
            <input type="file" className="add-photos-input" />

            <div className="photos2">
              <div className="sample-photo1" />
            </div>
            <button className="button2">{`<`}</button>
            <button className="button3">{`<`}</button>

            <div className="right-side1">
              <div className="profile7">Name of Organization:</div>
              <input type="text" className="name-of-org-input" />

              <div className="gender">Gender of owner :</div>
              <select className="gender-input">
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
                <option value="mercedes">Others</option>
              </select>

              <div className="people6">No. of people :</div>
              <input type="number" min="1" max="100" className="people-input" />
              
              <div className="contact9">Contact Number :</div>
              <input type="text" minLength="10" maxLength="10" className="contact-input1" />

              <button className="send-otp-btn-edit">
                <div className="verify-button1">Send OTP</div>
              </button>

              <div className="contact10">OTP :</div>
              <input type="text" minLength="4" maxLength="4" className="contact-input2" disabled />

              <button className="verify-otp-btn-edit" disabled>
                <div className="verify-button1">Verify</div>
              </button>
              
              <div className="email6">No. of Branches :</div>
              {/* <button className="minus-button">
                <div className="div7">-</div>
              </button> */}
              <input type="number" min="1" max="10" className="branch-input-edit" />
{/* 
              <button className="plus-button">
                <div className="div7">+</div>
              </button> */}

              
            </div>
          </div>

          {/* <div className="branch-box1">
            <div className="yellow-box-before7">
              <div className="profile8">B R A N C H - 1</div>
            </div>
            <div className="address2">
              Additional Information (Timings, Cost, etc.) :
            </div>
            <div className="contact-address-inputs1">
              <div className="contact-input3" />
              <div className="contact11">Contact of branch :</div>
              <div className="address3">Working Area / Address :</div>
              <div className="address-input2" />
              <button className="open-maps-button1">
                <div className="use-maps">Use Maps</div>
              </button>
            </div>
            <div className="address-input3" />
            <div className="divider7" />
          </div> */}
          <EditBranchBox/>


          <button className="plus-button1">
            <div className="div9">+</div>
          </button>
          <button className="upload-button1">
            <div className="save-changes">Save Changes</div>
          </button>
        </section>
      </main>
      {/* <section className="footer5">
        <div className="copyright-footer5">CopyRight FOOTER</div>
      </section> */}
      <div className="fixed-holder "> 
      <div className="profile9">M Y  <div style={{width:"14px"}}/> K A R O B A R S  <div style={{width:"14px"}}/> {`>`} <div style={{width:"14px"}}/>  E D I T</div>
      <div className="divider8" />
      </div>

      {/* <div className="left-side-nav">
        <img className="logo-1-icon5" alt="" src="/logo-13@2x.png" />
        <div className="profile10">My Karobars</div>
        <div className="profile11">Logout</div>
        <div className="profile12">Upload New Karobar</div>
        <div className="hello-username">Hello, Username</div>
        <div className="divider9" />
      </div> */}
      <ProfileLeftNav active="my-karobars"/>
      
      <Footer cssclass="footer"/>

    </div>
  );
};

export default EditMyKarobarsPage;
