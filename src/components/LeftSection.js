import React, { useEffect, useState } from "react";
import Architect from "./Architect";
import Business from "./Business";
import ControlledCarousel from "./Carousel";
// import DetailsLeftSection from "./DetailsLeftSection";
import Fashion from "./Fashion";
import FilterBtns from "./FilterBtn";
import PoliticsScience from "./PoliticsScience";
import Readers from "./Readers";
import StaffPick from "./StaffPick";
import "./styles/leftSection.scss";
import './styles/FilterBtn.scss'

import Tech from "./Tech";
import { AppUrl } from "../App";
import { ThreeDots } from "react-loader-spinner";
// import Travel from "./Travel";



export default function LeftSection() {

  
const [categories, setCategories] = useState([])
const [showCategory, setShowCategory] = useState('Sports')
const [loading, setLoading] = useState(false)
const [state, setState] = useState('')


const fetchCategories = async () => {
setLoading(true);

  const result = await fetch(`${AppUrl}/categories/`);
  const data = await result.json();
  setCategories(data);
  setTimeout(() => {
    setLoading(false)
      
    },1000); 
};
useEffect(()=>{
fetchCategories()
},[])

const handleBtns =(e)=>{
let cat = e.target.value;
categories.forEach(category=>{

  if(cat === category.name){
  setState(cat)
  console.log(state)
  }
  return state
})
}
// const clickToCategories = (value) => {
//   // console.log(categories);
//   setShowCategory(value)
//   console.log(value);
// }
  return (
    <div className="leftSection">
      <ControlledCarousel />
      <div className="filter-btns"> 
      {loading?<ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#03033a8f" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
           />: 
    categories.map(category=>{
        return ( 
        <button value={category.name} onClick={handleBtns} className="filter_btn">{category.name}</button>

        // <p>{category.name}</p>
    )})}
    </div>
<div hidden={showCategory !== "Headline"}> <StaffPick/></div>
     
      {/* <div hidden={showCategory !== "Sports"}><Business /></div>
      <div hidden={showCategory !== "Tech"} ><Tech/></div>
      <div hidden={showCategory !== "Fashion"} ><Fashion/></div>
      <div hidden={showCategory !== "Medicine"} ><Readers/></div>
      <div hidden={showCategory !== "Weather"} ><Architect/></div>
      <div hidden={showCategory !== "Politics"} ><PoliticsScience/></div> */}
      <Business />
      <Tech className='tech'/>
      <Fashion/>
      <Readers/>
      <Architect/>
      <PoliticsScience/>
      {/* <DetailsLeftSection /> */}
    </div>
  );
}
