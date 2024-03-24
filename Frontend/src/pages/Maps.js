import '../CSS/Maps.css';
import React, { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet.jsx';

// import { GoogleMaps } from './components/GoogleMaps';
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer';


const Maps = () => {
  const tabs = ['clickmap', 'search-by-address']
  const [activeTab, setActiveTab] = useState(tabs[0]);
 
  useEffect(() => {

    tabs.map((item)=>{
      document.getElementById(item).style.background = "none";
    })
    document.getElementById(activeTab).style.background = "#b1850d8a";
    
  },  [activeTab]);
  
  return (
    <>
    {/* <BrowserRouter> */}
    <div className='maps-header'>
      <div className='logo-h1'>
        <img/>
        Locate your Karobar
      </div>
      <div className='map-divider'></div>
      <div className='maps-tabs'>

        <Link to="/mapclick" style={{color: "inherit", textDecoration: "none"}}>
          <div id="clickmap" onClick={(e) =>{
            setActiveTab(e.target.id)
          }}>
            Point on map</div>
        </Link>

        <div className='divider-tabs'></div>

        <Link to="/maps" style={{color: "inherit", textDecoration: "none"}}>
          <div id="search-by-address" className='maps-tabs-inactive' onClick={(e) =>{
            setActiveTab(e.target.id)
          }}>
            Search by address  
          </div>
        </Link>
      </div>
    </div>  
    
    <div className="Maps-main">
        <Leaflet/>
        {/* <Routes>
          <Route path="/mapclick" element={<LeafletClickMap/>} />
          <Route path="/searchbyaddress" element={<Leaflet/>}/>
        </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    <Footer cssclass="footer" style={{width: '1375px'}}/>
    </>
  );
}

export default Maps;
