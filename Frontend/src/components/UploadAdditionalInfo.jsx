import {React, useState} from 'react'

export const UploadAdditionalInfo = () => {

  const [karobar, setKarobar] = useState({additionalTag: "", additionalDesc: ""})

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value

    setKarobar({...karobar,[name]:value });
  }

 
    const [childData, setChildData] = useState('');
  
    const handleInputChange = (event) => {
      const newData = event.target.value;
      setChildData(newData);
  
      // Call the parent component's callback function to send data
      sendDataToParent(newData);
    }

  return (
    <>
        <input placeholder="Add Tag (Timings, Cost, etc.)" className="additional-tag-input" value={karobar.additionalTag} onChange={handleInputs} name="additionalTag" type="text" />
        <div style={{height:"10px"}}/>
        <textarea placeholder="Add Description..." value={childData}
        onChange={handleInputChange} name = "additionalDesc" className="additional-info-desc-input" />

        <div style={{ width:"550px", height:"1px", marginTop:"10px",marginBottom:"10px", background:"darkgreen", display:"flex", justifyContent:"left"}}></div>
        
    </>
  )
}
