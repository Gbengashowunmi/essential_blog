import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
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
       <Link to="about"><li>About</li></Link>
       <Link to="/abou"> <li>Contact</li></Link>
       <Link to="/abo"> <li>Forum</li></Link>
       <Link to="/abow"> <li>Policy</li></Link>
        <Link to="/abe"> <li>FAQ</li></Link>
        <Link to="/abwe"><li>Shop</li></Link>
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
