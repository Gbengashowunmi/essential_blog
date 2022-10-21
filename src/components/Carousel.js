import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { AppUrl } from '../App';
import './styles/Carousel.scss'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [carouselDetails, setCarouselDetails] = useState([])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const fetchCarouselDetails = async()=> {
    const result = await fetch(`${AppUrl}/slider/`)
    const data = await result.json()
    setCarouselDetails(data)
    // console.log(data)
  }

  useEffect(()=>{
    fetchCarouselDetails();
  },[])
  // const url = 'http://192.168.1.131:8000'
  // console.log(resu);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
      {carouselDetails.map((carouselDetail)=>{
      return(
<Carousel.Item className='carousel-image' key={carouselDetail.image} >
        <img
          className="d-block w-100"
          src={`${carouselDetail.image}`}
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3 className="caption-text">{carouselDetail.title}</h3>
          <p className="caption-text">
            {carouselDetail.description.slice(0,120)}...
          </p>
          <Link to={`/detail/${carouselDetail.slug}/slider`} state={{data:'slider'}}  >
          <button className="read-more">READ MORE</button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      )
      })}
      
      {/* <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://img.youtube.com/vi/UxwscVIZ8Qg/hqdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3 className="caption-text">First slide label</h3>
          <p className="caption-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className="read-more">READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-ryRH20iz2v0/VZFHplQaqJI/AAAAAAAAKu0/dQb85VCObms/w728-rw/slider_05.webp"
          alt="Second slide"
        />

        <Carousel.Caption className="caption">
          <h3 className="caption-text">Second slide label</h3>
          <p className="caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="read-more">READ MORE</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-34lXLPV46rI/VZFHO-9QHfI/AAAAAAAAKuc/kTxCHl-9C24/w728-rw/slider_02.webp"
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3 className="caption-text">Third slide label</h3>
          <p className="caption-text">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className="read-more">READ MORE</button>

        </Carousel.Caption>
      </Carousel.Item> */}

    </Carousel>
  );
}
