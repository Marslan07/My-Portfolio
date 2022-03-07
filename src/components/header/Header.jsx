import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import Me from "../../assets/me.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Malik Arslan</h1>
        <h5 className="text-light">FullStack Developer</h5>

        {/* buttons for CV download */} 
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={Me} alt="my-picture" />
        </div>

        <a href="#Contactus" className='scrol__down'>Scroll Down</a>

      </div>
    </header>

  )
}

export default Header