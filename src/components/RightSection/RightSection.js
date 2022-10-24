import React, { useEffect } from 'react'
import CustomRight from './CustomRight'
import './styles/RightSection.scss'

export default function RightSection() {
// Sticky Menu Area
// useEffect(() => {
//   window.addEventListener('scroll', isSticky);
//   return () => {
//       window.removeEventListener('scroll', isSticky);
//   };
// });
// /* Method that will fix header after a specific scrollable */
//      const isSticky = (e) => {
//           const rightSection = document.querySelector('.right-section');
//           const scrollTop = window.scrollY;
//           // console.log(window.scrollY);
//           scrollTop >= 60 ? rightSection.classList.add('stick') : rightSection.classList.remove('stick');
//       };
 
  return (  
    <div className='right-section'>
      <CustomRight
        // src="https://4.bp.blogspot.com/-cCT-oadUDik/VLuu4yEM6rI/AAAAAAAAJMk/tBhlNmDcNiw/w67-rw/travel_looking-to-feeling_293K.webp"
        header="WEEKEND"  
        textContent="Custom Title Styles, Subtitle, Long Post Pagination, and More" 
      />
      <CustomRight
        // src="https://4.bp.blogspot.com/-cCT-oadUDik/VLuu4yEM6rI/AAAAAAAAJMk/tBhlNmDcNiw/w67-rw/travel_looking-to-feeling_293K.webp"
        header="RECENT WITH THUMBS"
        textContent="Custom Title Styles, Subtitle, Long Post Pagination, and More" 
      />
      <CustomRight
        // src="https://4.bp.blogspot.com/-cCT-oadUDik/VLuu4yEM6rI/AAAAAAAAJMk/tBhlNmDcNiw/w67-rw/travel_looking-to-feeling_293K.webp"
        header="RECENT REPLIES RANDOM"
        textContent="Custom Title Styles, Subtitle, Long Post Pagination, and More" 
      />
    </div>
  );
}
