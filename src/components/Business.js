import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";

import './styles/business.scss'

export default function Business(){

    return (
            <div className="businessSection">
            <header>
                <h3>BUSINESS</h3>
                <p>VIEW ALL <AiOutlineRight /> </p>
            </header>
        <div className="business">
            
            <div className="leftBusiness">
                <div className="image">
                    <img src="https://3.bp.blogspot.com/-jklMpLEIDso/VZCtVKWiqcI/AAAAAAAAKow/UHLsIAf2xFk/s1600/business_short-interview_75K.jpg" alt="business"/>
                </div>
                <div className="caption">
                    <p>Katie Diekman, 22, is looking forward to a "gap" year after graduating with a bachelor's degree from the University of Michigan in May. Convallis phe</p>
                   <span><p>5</p> <p><AiOutlineClockCircle /> Oct 07, 2022</p></span> 
                </div>

            </div>
            <div className="rightBusiness">
                <div className="right">
                    <button>PEOPLE</button>
                    <h5>Save '£700' a year by outsourcing your household bills</h5>
                </div>
                <div className="right">
                    <button>PEOPLE</button>
                    <h5>Save '£700' a year by outsourcing your household bills</h5>
                </div>
                <div className="right">
                    <button>PEOPLE</button>
                    <h5>Save '£700' a year by outsourcing your household bills</h5>
                </div>
               
               
                
                
            </div>
        </div>
            </div>
    )
}