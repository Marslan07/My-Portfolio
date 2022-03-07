import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Aboutus from "./components/about/Aboutus"
import Experience from "./components/experince/Experience"
import Services from "./components/Services/Services"
import Portfolio from "./components/Portfolio/Portfolio"
import Testimonials from "./components/testimoniols/Testimoniols"
import Contactus from "./components/contactus/contactus"
import Footer from "./components/footer/Footer"
const App = () => {
  return (
    <>

    <Header/>
    <Nav/>
    <Aboutus/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contactus/>
    <Footer/>

    </>
  )
}

export default App