import React from "react";
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
import Tech from "./Tech";
// import Travel from "./Travel";

export default function LeftSection() {
  return (
    <div className="leftSection">
      <ControlledCarousel />
      <FilterBtns/>
      <StaffPick />
      <Business />
      <Tech />
      <Fashion />
      <Readers />
      <Architect />
      <PoliticsScience />
      {/* <DetailsLeftSection /> */}
    </div>
  );
}
