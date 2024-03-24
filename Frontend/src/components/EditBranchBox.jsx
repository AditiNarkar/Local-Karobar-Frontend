import React from 'react'

export const EditBranchBox = () => {
  return (
    <div className="branch-box1">
            <div className="yellow-box-before7">
              <div className="profile8">B R A N C H - 1</div>
            </div>
            <div className="divider7" />

            <div className="contact-address-inputs1">
              <div className="contact11">Contact of branch :</div>
              <input type="text" minLength="10" maxLength="10" className="contact-input3" />

              <div className="address3">Working Area / Address :</div>
              <input type="text" className="address-input2" />
              <button className="open-maps-button1">
                <div className="use-maps">Use Maps</div>
              </button>
            </div>
            
            <div className="address2">
              Additional Information (Timings, Cost, etc.) :
            </div>
            <textarea className="address-input3" />
          </div>
  )
}
