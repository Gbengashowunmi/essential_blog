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
// import Travel from "./Travel";



export default function LeftSection() {

  
const [categories, setCategories] = useState([])
const [showCategory, setShowCategory] = useState('Sports')

const fetchCategories = async () => {
  const result = await fetch(`${AppUrl}/categories/`);
  const data = await result.json();
  setCategories(data);
  // console.log(data); 
};
useEffect(()=>{
fetchCategories()
},[])

const clickToCategories = (value) => {
  // console.log(categories);
  setShowCategory(value)
  console.log(value);
}
  return (
    <div className="leftSection">
      <ControlledCarousel />
      <div className="filter-btns">  
    {categories.map(category=>{
        return (
        <button onClick={() => clickToCategories(category.name)} className="filter-btn">{category.name}</button>
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
      <Tech/>
      <Fashion/>
      <Readers/>
      <Architect/>
      <PoliticsScience/>
      {/* <DetailsLeftSection /> */}
    </div>
  );
}
