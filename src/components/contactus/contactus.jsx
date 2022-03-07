import React from 'react'
import "../contactus/contactus.css"
import{MdOutlineMail} from "react-icons/md"
import{BsMessenger} from "react-icons/bs"
import{BsWhatsapp} from "react-icons/bs"
const contactus = () => {
  return (
    <section id='Contactus'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <MdOutlineMail className='contact-option-icon'/>
           <h4>Email</h4>
           <h5>m.arslan6845@gmail.com</h5>
           <a href="mailto:m.arslan6845@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact-option'>
            <BsMessenger className='contact-option-icon'/>
           <h4>Messenger</h4>
           <h5>Malik Arslan</h5>
           <a href="https://m.me/malik.shan.184007" target="_blank">Send a message</a>
          </article>

          <article className='contact-option'>
            <BsWhatsapp className='contact-option-icon'/>
           <h4>Whatsapp</h4>
           <h5>+123456789</h5>
           <a href="https://api.whatsapp.com/send?phone=+923072156668" target="_blank">Send a message</a>
          </article>
        </div>

        {/* ========================END OPTION PART================ */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contactus