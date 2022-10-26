import React, { useContext, useEffect } from "react";
// import LeftSection from "./LeftSection";
import "./styles/MainSection.scss";
import RightSection from "./RightSection/RightSection";
// import DetailsLeftSection from "./DetailsLeftSection";
import { Outlet } from "react-router";
import Headers from "./Header";
import Footer from "./Footer";
import AuthenticationContext from "../pages/Login/AuthContext";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import AuthenticationContext from "./Login_Signup/Store/AuthContext";

export default function MainSection() {

  const authctx = useContext(AuthenticationContext)
  
        const scrollUp =()=>{
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'
        })}
        useEffect(() => {
          window.addEventListener('scroll', isSticky);
          return () => {
              window.removeEventListener('scroll', isSticky);
          };
        });
        /* Method that will fix header after a specific scrollable */
             const isSticky = (e) => {
                  const rightSection = document.querySelector('.right-section');
                  const scrollTop = window.scrollY;
                  // console.log(window.scrollY);
                  scrollTop >= 60 ? rightSection.classList.add('stick') : rightSection.classList.remove('stick');
              };
        
        // console.log(authctx.isLoggedIn);

        // window.localStorage.setItem('is_loggedIn', count);

        
  return (

    <>
    <Headers/>
    <div className="mainSection">
    {/* <div className='advert'>Advert Placement</div> */}

      <div className="leftSection">
        <Outlet />
      </div>
      <div className="rightSection">
        <RightSection />
      </div>
      <button  onClick= {scrollUp} className="up-btn"><i class="fa-solid fa-circle-up"></i></button>
    </div>
    <Footer /> 
    </>
  );
}
