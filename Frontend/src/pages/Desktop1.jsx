import "../CSS/Desktop1.css";
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from "react-router-dom";

const Desktop1 = () => {

  return (
    <>
    <div className="desktop-1">

    <Parallax pages={1.99}>
   
      <section className="home-page">
        <img className="badal-middle-icon" alt="" src="/badal-middle@2x.png" />
        <img className="badal-left-icon" alt="" src="/badal-left@1x.png" />
        <img className="badal-right-1" alt="" src="/badal-right-1@2x.png" />
        
        {/* <ParallaxLayer offset={0} speed={1}>
          <img className="rocks-icon" alt="" src="/rocks@2x.png" />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={0} sticky={{start:0, end:2}}> */}
        <header className="navbar-desktop" style={{top:0}}>
          <div className="nav-links-desktop">
            <div className="contact">Contact</div>
            <div className="about">About</div>
          </div>
        </header>
        {/* </ParallaxLayer> */}


        <ParallaxLayer offset={0} speed={1}>
          <img className="ground-icon" alt="" src="/ground@2x.png"/>
          <img className="home-tree-icon" alt="" src="/home-tree@2x.png" />
        </ParallaxLayer>
        
        
        

        <ParallaxLayer offset={0} speed={0.3}>
          <img className="layer-4-icon" alt="" src="/layer-4@2x.png" />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0.7}>
          <img className="layer-3-icon" alt="" src="/layer-3@2x.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.1}>
        <img className="layer-2-icon" alt="" src="/layer-2@2x.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
        <img className="local" alt="" src="/local.png" />
        <img className="karobar" alt="" src="/karobar.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <img className="layer-1-icon" alt="" src="/layer-1@2x.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <img className="rocks-icon" alt="" src="/rocks@2x.png" />
        </ParallaxLayer>

        

        <div className="all-buttons">
          <button className="explore-button">
            <div className="explore"><Link to = "/explorepage">Explore</Link></div>
          </button>
          <div className="buttons">
            <button className="login-button">
              <div className="log-in"><Link to = "/loginpage">Log In</Link></div>
            </button>
            <button className="sign-up-button">
              <div className="sign-up"><Link to = "/signuppage">Sign Up</Link></div>
            </button>
          </div>
        </div>
        <img className="logo-2-icon" alt="" src="/logo-2@2x.png" />
        
        
        

{/* 
        <Parallax
          translateX={['-400px', '0px']}
          scale={[0.75, 1]}
          rotate={[-180, 0]}
          easing="easeInQuad"
        >
        <img
          className="red-leaf-scroller"
          alt=""
          src="/red-leaf-scroller@2x.png"
        />
        </Parallax> */}


        <div className="home-page-blur"></div>
      </section>

      <section className="about-and-contact">
        <div className="about-middle-blur"></div> 
        <div className="forest-about-svg-1">
          <img className="ground-back-icon" alt="" src="/ground-back@2x.png" />
          <img className="left-back-tree" alt="" src="/left-back-tree@2x.png" />
          <img className="left-bush-icon" alt="" src="/left-bush@2x.png" />
          <img className="ground-middle-icon" alt=""
            src="/ground-middle@2x.png"
          />
          <img
            className="right-front-tree"
            alt=""
            src="/right-front-tree@2x.png"
          />
          <img
            className="right-main-tree"
            alt=""
            src="/right-main-tree@2x.png"
          />
          <img className="left-main-tree" alt="" src="/left-main-tree@2x.png" />
          <img className="left-half-tree" alt="" src="/left-half-tree@2x.png" />
          <img
            className="front-tree-leaves"
            alt=""
            src="/front-tree-leaves@2x.png"
          />
        </div>
        <div className="about-info-section">
          <img className="logo-1-icon-desktop" alt="" src="/logo-1@2x.png" />
          <div className="a-heartwarming-space">
            A heartwarming space dedicated to showcasing the vibrant tapestry of
            local vendors and small shops that define our community. We take
            immense pride in being the gateway to a world of unique treasures,
            personalized experiences, and heartfelt connections. Established
            with a deep-rooted commitment to fostering local talent and
            nurturing entrepreneurship, Local <span style={{fontSize:"15px"}}>कारोबार</span> is more than just a
            platform – it's a movement. Our journey began with the belief that
            every small shop and local vendor has a story to tell, and that
            their contributions are the lifeblood of our neighborhood's
            character and charm. Experience the joy of supporting local dreams,
            and be a catalyst for change in our community. Choose Local <span style={{fontSize:"15px"}}>कारोबार</span>
            – Your Gateway to Local Vendor and Small Shop Excellence.
          </div>
        </div>
        <div className="contact-us-form">
          <input
            className="name-input-desktop"
            type="text"
            placeholder="Your Name ..."
            maxLength={48}
            required
          />
          <input
            className="email-input-desktop"
            type="email"
            placeholder="Your email ..."
            maxLength={50}
            required
          />
          <textarea placeholder="Your message..." className="message-box" required />
          <button className="submit-button">
            <div className="submit">Submit</div>
          </button>
          <label className="email-home">Email</label>
          <label className="name-home">Name</label>
          <label className="contact-us">Contact Us</label>
        </div>
        <button className="add-me-button">
          <div className="submit-home">Add me</div>
        </button>
      </section>
      <img className="left-banyan-leaf" alt="" src="/left-banyan-leaf@2x.png" />
      <img
        className="right-banyan-leaf"
        alt=""
        src="/right-banyan-leaf@2x.png"
      />
      <img
        className="left-banyan-leaf-2"
        alt=""
        src="/left-banyan-leaf-2@2x.png"
      />
      <img className="left-banyan-leaf" alt="" src="/left-leaves@2x.png" />
      <img className="right-leaves-icon" alt="" src="/right-leaves@2x.png" />
      <img
        className="ground-left-leaves"
        alt=""
        src="/ground-left-leaves@2x.png"
      />
      <img
        className="ground-right-leaves"
        alt=""
        src="/ground-right-leaves@2x.png"
      />
      <img className="rocks-icon1" alt="" src="/rocks1@2x.png" />

      <section className="footer-desktop">
        <div className="copyright-footer-desktop">CopyRight footer-desktop</div>
      </section>

      {/* <footer-desktop cssclass="footer-desktop"/> */}

      </Parallax>
    </div>
    
    </>
  );
};
export default Desktop1;
