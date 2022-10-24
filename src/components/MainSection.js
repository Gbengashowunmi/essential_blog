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
         // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
// /* Method that will fix rightSection after a specific scrollable */
       const isSticky = (e) => {
            const rightSection = document.querySelector('.rightSection');
            const scrollTop = window.scrollY;
            // console.log(window.scrollY);
            scrollTop >= 1024 ? rightSection.classList.add('sticky') : rightSection.classList.remove('sticky');
        };

        
        // console.log(authctx.isLoggedIn);

        // window.localStorage.setItem('is_loggedIn', count);

        
  return (

    <>
    <Headers/>
    <div className="mainSection">
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
