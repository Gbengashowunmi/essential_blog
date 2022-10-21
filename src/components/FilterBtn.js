import React, { useEffect, useState } from "react";
import { AppUrl } from "../App";
import './styles/FilterBtn.scss'

export default function FilterBtns(){
const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        const result = await fetch(`${AppUrl}/categories/`);
        const data = await result.json();
        setCategories(data);
        // console.log(data); 
      };
      useEffect(()=>{
      fetchCategories()
      },[])

    //   const filterCategory = ()=>{
    //     categories.map(category=>{
    //         category.filter(category.name=== )
    //     })
    //   }



    return(
    <div className="filter-btns">  
    {categories.map(category=>{
        return <button className="filter-btn">{category.name}</button>

    })}
    
    </div>
    )
}