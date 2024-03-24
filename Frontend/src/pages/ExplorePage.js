import "../CSS/ExplorePage.css";
import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import {ExploreKarobarCard} from "../components/ExploreKarobarCard"
import {useEffect, useState} from 'react'

const ExplorePage = () => {

 
const [userData, setUserdata] = useState([])
const categoryOptions = [
  {
    id: "1",
    bottonClass: "artist",
    imgClass: "spellcheck-icon",
    imgSrc: "/spellcheck1.svg",
    divClass: "education",
    text: "Education"
  },
  {
    id: "2",
    bottonClass: "artist1",
    imgClass: "spellcheck-icon",
    imgSrc: "/palette.svg",
    divClass: "artist-carpentery",
    text: "Artist / Carpentery"
  },
  {
    id: "3",
    bottonClass: "artist2",
    imgClass: "spellcheck-icon",
    imgSrc: "/tools.svg",
    divClass: "household-services",
    text: "Household Services"
  },

  {
    id: "4",
    bottonClass: "artist3",
    imgClass: "shop1-icon",
    imgSrc: "/shop11.svg",
    divClass: "wholesale-retail",
    text: "Wholesale / Retail"
  },
  {
    id: "5",
    bottonClass: "artist4",
    imgClass: "janitor-icon",
    imgSrc: "/janitor@2x.png",
    divClass: "maid-cleaner",
    text: "Maid / Cleaner"
  },
  {
    id: "6",
    bottonClass: "artist5",
    imgClass: "spellcheck-icon",
    imgSrc: "/laptop.svg",
    divClass: "wholesale-retail",
    text: "Freelancer"
  },
  {
    id: "7",
    bottonClass: "artist6",
    imgClass: "spellcheck-icon",
    imgSrc: "/camera.svg",
    divClass: "photography",
    text: "Photography"
  },
  {
    id: "8",
    bottonClass: "artist7",
    imgClass: "guru-icon",
    imgSrc: "/guru@2x.png",
    divClass: "gym-yoga",
    text: "Gym / Yoga"
  },
  {
    id: "9",
    bottonClass: "artist8",
    imgClass: "spellcheck-icon",
    imgSrc: "/cart4.svg",
    divClass: "general-store",
    text: "General Store"
  },
  {
    id: "10",
    bottonClass: "artist9",
    imgClass: "guru-icon",
    imgSrc: "/dining-room@2x.png",
    divClass: "eatery",
    text: "Eatery"
  },
  {
    id: "11",
    bottonClass: "artist10",
    imgClass: "spellcheck-icon",
    imgSrc: "/geoalt.svg",
    divClass: "tours-travels",
    text: "Tours & Travels"
  },
  {
    id: "12",
    bottonClass: "artist11",
    imgClass: "spellcheck-icon",
    imgSrc: "/listcolumnsreverse.svg",
    divClass: "others",
    text: "All"
  }
]

// const handleOnchange = ((e)=>{
//   setCategory(e.target.value)
// })

const [categoryObj, setCategoryObj] = useState({})

const [category, setCategory] = useState("")
const [city, setCity] = useState("")
const [locality, setLocality] = useState("")


useEffect(() => {
  //console.log(category)

  if(document.getElementById(categoryObj.id)){
    categoryOptions.map((item) =>  document.getElementById(item.id).style.background = "var(--color-darkorange)")
    document.getElementById(categoryObj.id).style.background = 'rgba(255, 81, 0, 0.7)';

    if(categoryObj.id == '12'){
      //document.getElementById("other-input").removeAttribute("disabled");
      // document.getElementById("other-input").style.background = "white"
      // document.getElementById("other-input").placeholder = "Enter your karobar category"
      // document.getElementById("other-input").value = category
      setCategory("")
      //document.getElementById("12").onclick = () => { window.location.href = "/explorepage" }
    }
    
  }

}, [category])


const exploreURL = "http://localhost:5000/api/exploredata"

const getData = async() => {
  const response = await fetch(exploreURL, {
    method:"GET",
    headers:{
      Accept: "application/json",
      "Content-Type" : "application/json"
    },
    credentials: "include"
  })
  const data = await response.json()
  setUserdata(data.doc)
  console.log("Userdatais ",data.doc)
  if (!data.status ==200){
    const error = new Error(response.error)
        throw error
  }
 
}
useEffect(()=> {
  getData()
},[])

// const searchParams = async() => {

// }
  return (
    <div className="explore-page">
      {/* <header className="navbar7">
        <div className="nav-links7">
          <h1 className="contact13">Contact</h1>
          <h1 className="about7">{`About `}</h1>
          <h1 className="home7">Home</h1>
        </div>
        <button className="logout-2-14" />
        <div className="profile47">Signed In as: Username</div>
      </header> */}
      <Header cssclass="navbar"/>
      <section className="search-box">
        <div className="yellow-box-before8" />

        <h1 className="type1">Looking For ?</h1>
        
        <div className="search">S E A R C H</div>
        <img className="logo-1-icon7" alt="" src="/logo-12@2x.png" />
        <div className="divider12" />

        <input className="state-input" value="Maharashtra" disabled type="text" />
        <h1 className="profile48">State :</h1>

        <input className="city-input" onChange={(e) => setCity(e.target.value)} value={city} type="text" />
        <h1 className="profile49">City :</h1>

        <input className="locality-input" onChange={(e) => setLocality(e.target.value)} value={locality} type="text" />
        <div className="profile50">Locality :</div>

        

         <div className="category-options1">
         {
          categoryOptions.map((item) => {
            return(
              <>
              <button style={{ border: 'none', cursor:'pointer'}} className={item.bottonClass} id={item.id} onClick={(e) =>  {
                  e.preventDefault()
                  setCategoryObj(item)
                  setCategory(item.text)
                  }
                } >
                <img className={item.imgClass} src={item.imgSrc} />
                <div className={item.divClass}> {item.text} </div>
              </button>
              </>
            )
          })
        }
          {/*<div className="artist12">
            <img className="spellcheck-icon1" alt="" src="/spellcheck.svg" />
            <div className="education1">Education</div>
          </div>
          <div className="artist13">
            <img className="spellcheck-icon1" alt="" src="/palette1.svg" />
            <div className="artist-carpentery1">Artist / Carpentery</div>
          </div>
          <div className="artist14">
            <img className="spellcheck-icon1" alt="" src="/tools1.svg" />
            <div className="household-services1">Household Services</div>
          </div>
          <div className="artist15">
            <img className="shop1-icon1" alt="" src="/shop1.svg" />
            <div className="wholesale-retail1">Wholesale /Retail</div>
          </div>
          <div className="artist16">
            <img className="spellcheck-icon1" alt="" src="/laptop1.svg" />
            <div className="freelancer1">Freelancer</div>
          </div>
          <div className="artist17">
            <img className="spellcheck-icon1" alt="" src="/camera1.svg" />
            <div className="photography1">Photography</div>
          </div>
          <div className="artist18">
            <img className="spellcheck-icon1" alt="" src="/cart41.svg" />
            <div className="general-store1">General Store</div>
          </div>
          <div className="artist19">
            <img className="spellcheck-icon1" alt="" src="/geoalt1.svg" />
            <div className="tours-travels1">{`Tours &Travels`}</div>
          </div>
          <div className="artist20">
            <img
              className="spellcheck-icon1"
              alt=""
              src="/listcolumnsreverse1.svg"
            />
            <div className="others1">Others</div>
          </div>
          <button className="artist21">
            <img className="janitor-icon1" alt="" src="/janitor1@2x.png" />
            <div className="maid-cleaner1">Maid / Cleaner</div>
          </button>
          <div className="artist22">
            <img className="guru-icon1" alt="" src="/guru1@2x.png" />
            <div className="gym-yoga1">Gym / Yoga</div>
          </div>
          <button className="artist23">
            <img className="guru-icon1" alt="" src="/dining-room1@2x.png" />
            <div className="eatery1">Eatery</div>
          </button>*/}
        </div> 

        <button className="search-btn" 
        onClick={ async (e)=>{
          e.preventDefault();

          const sendParamsURL = "http://localhost:5000/api/filtereddata"
          
          const res = await fetch(sendParamsURL, {
            method:"POST",
            headers:{
              Accept: "application/json",
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({category,city,locality}),
            credentials: "include"
          })

          const data = await res.json()
          //console.log( res.json())

          switch(res.status){
            case 201:
              setUserdata(data.karobars)
            break
            
            case 202:
              setUserdata(data.category)
            break

            case 203:
              setUserdata(data.filteredCategory)
            break

            case 204:
              console.log("data.filteredAddress", data.filteredAddress)
              setUserdata(data.filteredAddress)
            break
            }
          }
                  
        }
        
        >
        <div className="search1">Search</div>
        </button>

      </section>
      <div className="divider13" />

      <div className="search-list2" style={{ minHeight:'185px'}}>

        {/* <div className="explore-karobar-card">
          <img
            className="profile-image-icon7"
            alt=""
            src="/profileimage1@2x.png"
          />
          <b className="profile51">Name of Organization</b>
          <div className="profile52">Owned by:</div>
          <div className="profile53">Nearest branch address:</div>
          <button className="open-maps-button14">
            <div className="profile54">Copy Link</div>
          </button>
          <button className="open-maps-button15">
            <div className="profile55">Open in maps</div>
          </button>
        </div> */}
        <ExploreKarobarCard users = {userData}/>

      </div>
      {/* <section className="footer7">
        <div className="copyright-footer7">CopyRight FOOTER</div>
      </section> */}
      <Footer cssclass="footer7"/>
    </div>
  );
};

export default ExplorePage;







// import "../CSS/ExplorePage.css";
// import {Footer} from "../components/Footer"
// import {Header} from "../components/Header"
// import {ExploreKarobarCard} from "../components/ExploreKarobarCard"
// import React from 'react'


// const ExplorePage = () => {
//   return (
//     <div className="explore-page">
//       {/* <header className="navbar7">
//         <div className="nav-links7">
//           <h1 className="contact13">Contact</h1>
//           <h1 className="about7">{`About `}</h1>
//           <h1 className="home7">Home</h1>
//         </div>
//         <button className="logout-2-14" />
//         <div className="profile47">Signed In as: Username</div>
//       </header> */}
//       <Header cssclass="navbar"/>
//       <section className="search-box">
//         <div className="yellow-box-before8" />

//         <h1 className="type1">Looking For ?</h1>
        
//         <div className="search">S E A R C H</div>
//         <img className="logo-1-icon7" alt="" src="/logo-12@2x.png" />
//         <div className="divider12" />

//         <input className="state-input" value="Maharashtra" disabled type="text" />
//         <h1 className="profile48">State :</h1>

//         <input className="city-input" type="text" />
//         <h1 className="profile49">City :</h1>

//         <input className="locality-input" type="text" />
//         <div className="profile50">Locality :</div>

        

//         <div className="category-options1">
//           <div className="artist12">
//             <img className="spellcheck-icon1" alt="" src="/spellcheck.svg" />
//             <div className="education1">Education</div>
//           </div>
//           <div className="artist13">
//             <img className="spellcheck-icon1" alt="" src="/palette1.svg" />
//             <div className="artist-carpentery1">Artist / Carpentery</div>
//           </div>
//           <div className="artist14">
//             <img className="spellcheck-icon1" alt="" src="/tools1.svg" />
//             <div className="household-services1">Household Services</div>
//           </div>
//           <div className="artist15">
//             <img className="shop1-icon1" alt="" src="/shop1.svg" />
//             <div className="wholesale-retail1">Wholesale /Retail</div>
//           </div>
//           <div className="artist16">
//             <img className="spellcheck-icon1" alt="" src="/laptop1.svg" />
//             <div className="freelancer1">Freelancer</div>
//           </div>
//           <div className="artist17">
//             <img className="spellcheck-icon1" alt="" src="/camera1.svg" />
//             <div className="photography1">Photography</div>
//           </div>
//           <div className="artist18">
//             <img className="spellcheck-icon1" alt="" src="/cart41.svg" />
//             <div className="general-store1">General Store</div>
//           </div>
//           <div className="artist19">
//             <img className="spellcheck-icon1" alt="" src="/geoalt1.svg" />
//             <div className="tours-travels1">{`Tours &Travels`}</div>
//           </div>
//           <div className="artist20">
//             <img
//               className="spellcheck-icon1"
//               alt=""
//               src="/listcolumnsreverse1.svg"
//             />
//             <div className="others1">Others</div>
//           </div>
//           <button className="artist21">
//             <img className="janitor-icon1" alt="" src="/janitor1@2x.png" />
//             <div className="maid-cleaner1">Maid / Cleaner</div>
//           </button>
//           <div className="artist22">
//             <img className="guru-icon1" alt="" src="/guru1@2x.png" />
//             <div className="gym-yoga1">Gym / Yoga</div>
//           </div>
//           <button className="artist23">
//             <img className="guru-icon1" alt="" src="/dining-room1@2x.png" />
//             <div className="eatery1">Eatery</div>
//           </button>
//         </div>

//         <button className="search-btn">
//           <div className="search1">Search</div>
//         </button>

//       </section>
//       <div className="divider13" />

//       <div className="search-list2">

//         {/* <div className="explore-karobar-card">
//           <img
//             className="profile-image-icon7"
//             alt=""
//             src="/profileimage1@2x.png"
//           />
//           <b className="profile51">Name of Organization</b>
//           <div className="profile52">Owned by:</div>
//           <div className="profile53">Nearest branch address:</div>
//           <button className="open-maps-button14">
//             <div className="profile54">Copy Link</div>
//           </button>
//           <button className="open-maps-button15">
//             <div className="profile55">Open in maps</div>
//           </button>
//         </div> */}
//         <ExploreKarobarCard/>

//       </div>
//       {/* <section className="footer7">
//         <div className="copyright-footer7">CopyRight FOOTER</div>
//       </section> */}
//       <Footer cssclass="footer7"/>
//     </div>
//   );
// };

// export default ExplorePage;
