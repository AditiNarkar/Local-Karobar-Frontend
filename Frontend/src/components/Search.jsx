//npm install react-bootstrap bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

import React, { useState } from 'react'
import '../CSS/searchbyaddressMaps.css'

const LOCATION_XML = "https://nominatim.openstreetmap.org/search?"
const params = {
    q: '',
    format: 'json',
    addressdetails: 'addressdetails'
}


export const Search = ({ selectedPlace, setSelectedPlace }) => {
    //const [confirmAddress, setConfirmAddress] = useState()
    const [searchText, setSearchText] = useState("");
    const [suggestedPlaces, setSuggestedPlaces] = useState([]);

    return (
        <>

        <form>
            <div className='maps-input-search-main-container'>
        <input 
            className="maps-search-input"
            type="text" 
            placeholder="Karobar's Address ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} >
        </input>

        <button
            className='search-btn-maps'
            onClick={async (e) => {
                e.preventDefault();
                const params = {
                    q: searchText,
                    format: 'json',
                    addressdetails: 1,
                    polygon_geojson: 0
                };
                const queryStr = new URLSearchParams(params).toString();
                const reqOptions = {
                    method: "GET",
                    redirect: "follow"
                };

                const fetchURL = LOCATION_XML + queryStr

                const response = await fetch(fetchURL, reqOptions);
                const data = await response.text()
               // console.log(JSON.parse(data))
                setSuggestedPlaces(JSON.parse(data))

            }}
        >
            <img style={{width:"30px"}} src='/search_icon.png'/>
        </button>

        <ul className='ul-searchbyaddress'>
        {
            suggestedPlaces.map((item) => {
                return (
                    <div key={item?.place_id}>
                        <li style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setSelectedPlace(item)
                            }}>
                            <img src="./location_icon.png" style={{ width: "20px" , marginRight:"15px"}} />
                            {item?.display_name}
                        </li>
                        <div style={{backgroundColor:"white", margin:"10px 5px 10px 5px", width:"100%",height:"1px"}}></div>
                    </div>
                )
            })
            
        }
        </ul>

   
        <input
            className='text-submission'
            value={selectedPlace?.display_name}
            placeholder='Your chosen address will appear here...'
            onChange={(e) => setSelectedPlace(e.target.value)}
            disabled
        ></input>
        <button 
            className='submit-button-address-maps'
            style={{ cursor: 'pointer'}}
            onClick={(e) => {
                e.preventDefault()
                if(selectedPlace){
                    const address = selectedPlace.display_name
                    //console.log(address)
                    localStorage.setItem('mapsAddress', address)
                    window.close()
                }
                else{
                    window.alert("No address selected.")
                }
            }}
        >
        Confirm</button>

        </div>
        </form>




        {/* <div>
        <InputGroup className="mb-3 maps-search-input">
            <Form.Control
                placeholder="Search text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                aria-describedby="basic-addon2"
            />
            <Button
                variant="primary"
                onClick={async () => {
                    const params = {
                        q: searchText,
                        format: 'json',
                        addressdetails: 1,
                        polygon_geojson: 0
                    };
                    const queryStr = new URLSearchParams(params).toString();
                    const reqOptions = {
                        method: "GET",
                        redirect: "follow"
                    };

                    const fetchURL = LOCATION_XML + queryStr

                    const response = await fetch(fetchURL, reqOptions);
                    const data = await response.text()
                    console.log(JSON.parse(data))
                    setSuggestedPlaces(JSON.parse(data))

                }}
            >Search
            </Button>

        </InputGroup>
        <ListGroup className='ul-searchbyaddress'>
            {
                suggestedPlaces.map((item) => {
                    return (
                        <div key={item?.place_id}>
                            <ListGroup.Item onClick={() => {
                                setSelectedPlace(item)
                            }}>
                                <img src="./location_icon.png" style={{ width: "30px" }} />
                                {item?.display_name}
                            </ListGroup.Item>
                        </div>
                    )
                })
            }
        </ListGroup>
        </div> */}
        </>
    )
}
