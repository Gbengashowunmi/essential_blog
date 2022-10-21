import React, { useEffect } from 'react'
import CustomRight from './CustomRight'
import './styles/RightSection.scss'

export default function RightSection() {

 
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
