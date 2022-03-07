import React from 'react'
import "./Footer.css"
import{BsFacebook} from "react-icons/bs"
import{BsInstagram} from "react-icons/bs"
import{FaTwitterSquare} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>Malik Arslan</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#Aboutus">About us</a></li>
        <li><a href="#Contactus">Contact us</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>  
        <li><a href="#Testimoniols">Testimoniols</a></li>
      </ul>
<div className="footer-social">
  <a href="https://facebook.com"><BsFacebook/></a>
  <a href="https://instagram.com"><BsInstagram/></a>
  <a href="https://twiter.com"><FaTwitterSquare/></a>
</div>

<div className="footer-copyRight">
  <small>
    &copy; Malik Arslan. All Rights Reserved 2022.
  </small>
</div>
    </footer>
  )
}

export default Footer