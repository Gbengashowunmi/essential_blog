import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import './styles/Footer.scss'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-name">
        <h2>ESSENTIAL</h2> 
        <p>2022 Essential</p>
        <p>All rights reserved.</p>
      </div>

      <ul className="ul">
        <li>About</li>
        <li>Contact</li>
        <li>Forum</li>
        <li>Policy</li>
        <li>FAQ</li>
        <li>Shop</li>
      </ul>
      <div className="form-section">
        <div className="contact-icons">
          <AiOutlineTwitter className="icon" />
          <AiFillLinkedin className="icon" />
          <AiFillYoutube className="icon" />
          <AiFillFacebook className="icon" />
        </div>

        <form className="form">
            <input placeholder="Enter Email" />
            <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
