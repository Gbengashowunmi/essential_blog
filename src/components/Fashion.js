import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./styles/Fashion.scss";

export default function Fashion() {
  return (
    <div className="fashion-container">  
      <span>
        <h3>FASHION</h3>
        <p>
          VIEW ALL
          <AiOutlineRight />
        </p>
      </span>

      <div className="containers">
        <div className="left-container">
          <div className="left-cont1">
            <div className="image-container">
              <img
                src="https://4.bp.blogspot.com/-G8KpjvsQrUI/VZDtBxP9xxI/AAAAAAAAKq8/Fbfs8Kxrw_M/s1600/fasion_autumn-fire_101K.jpg"
                alt=""
              />
              <div className="button">
                <button>Future</button>
                <h5>Take a look into the future of technology</h5>
              </div>
            </div>
          </div>

          <div className="left-cont2">
            <div className="image-container">
              <img
                src="https://4.bp.blogspot.com/-G8KpjvsQrUI/VZDtBxP9xxI/AAAAAAAAKq8/Fbfs8Kxrw_M/s1600/fasion_autumn-fire_101K.jpg"
                alt=""
              />
              <div className="button">
                <button>Future</button>
                <h5>Take a look into the future of technology</h5>
              </div>
            </div>
          </div>

          <div className="left-cont3">
            <div className="image-container">
              <img
                src="https://2.bp.blogspot.com/-wNokC1jmz1A/VZDxZS33hsI/AAAAAAAAKrY/9LqQIcvaz2A/s450-rw/fasion_new-gisel_106K.webp"
                alt=""
              />
              <div className="button">
                <button>Future</button>
                <h5>Take a look into the future of technology</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-cont1">
            <div className="image-container">
              <img
                src="https://3.bp.blogspot.com/-OfTnEDq22WM/VZDuM5yGGZI/AAAAAAAAKrE/2bgsYN5u9Gk/s450-rw/fasion_hijab-collection_75K.webp"
                alt=""
              />
              <div className="button">
                <button>Future</button>
                <h5>Take a look into the future of technology</h5>
              </div>
            </div>
          </div>

          <div className="right-cont2">
            <div className="image-container">
              <img
                src="https://4.bp.blogspot.com/-zRCFgtqAMII/VZDwf46SslI/AAAAAAAAKrQ/_-zS6cXR09U/s450-rw/fasion_creature-concept_229K.webp"
                alt=""
              />
              <div className="button">
                <button>Future</button>
                <h5>Take a look into the future of technology</h5>
              </div>
            </div>
          </div>

          <div className="right-cont3">
            <div className="image-container">
              <img
                src="https://3.bp.blogspot.com/-teOCEZ9lnbc/VZDygUj6fmI/AAAAAAAAKrg/EdgzRANztyc/s450-rw/fasion_backstage-avantgarde_125K.webp"
                alt=""
              />
              <div className="button">
                <button>Future</button>
                <h5>Take a look into the future of technology</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
