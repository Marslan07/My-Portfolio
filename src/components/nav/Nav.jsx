import React from 'react'
import "./Nav.css"

import{FaHome} from "react-icons/fa"
import{AiOutlineUser} from "react-icons/ai"
import{MdContactPage} from "react-icons/md"
import{BiBook} from "react-icons/bi"
import{RiServiceLine} from "react-icons/ri"
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setavtiveNav]= useState ("#")
  return (
    
    <nav>
      <a href="#" onClick={()=> setavtiveNav('#')} className={activeNav=== '#' ? 'active':''}><FaHome/></a>
      <a href="#Aboutus"onClick={()=> setavtiveNav('Aboutus')} className={activeNav=== 'Aboutus' ? 'active':''}><AiOutlineUser/></a>
      <a href="#Contactus"onClick={()=> setavtiveNav('Contactus')} className={activeNav=== 'Contactus' ? 'active':''}><MdContactPage/></a>
      <a href="#Experience"onClick={()=> setavtiveNav('#Experience')} className={activeNav=== '#Experience' ? 'active':''}><BiBook/></a>
      <a href="#Services"onClick={()=> setavtiveNav('#Services')} className={activeNav=== '#Services' ? 'active':''}><RiServiceLine/></a>
    </nav>
  )
}

export default Nav