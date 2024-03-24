import React from 'react'

export const ViewBranchBox = ({cssclass, karobar}) => {
// console.log("branchData",branchData )
    (karobar.branchData)?
    (karobar.branchData).map((branch) => {
     // console.log(branch)
      return(
        <section className={cssclass}>
        <div className="yellow-box-before5" />
        <div className="profile3">B R A N C H &nbsp;&nbsp; D E T A I L S</div>
        <div className="divider6" />

        <div className="contact-address-inputs">

          <div className="contact6">Contact of branch :</div><div className="virat-kohli3">{branch}</div>

          <div className="address1">Working Area / Address :</div>
          <div className="address-input" > {} </div>

        {/*           
          <button className="open-maps-button">
            <div className="open-maps">Open Maps</div>
          </button> */}


        </div>

        <div className="view-add-info">
        <div className="address">
          Additional Information:
        </div>
        <div className="address-input1" />
        </div>
        
        
      </section>
      )
      
    })
    :
    console.log("karobar", karobar)
}
