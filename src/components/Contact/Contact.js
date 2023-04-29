import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import './Contact.scss'
import Pretitle from '../Pretitle/Pretitle'
import {FaFacebookMessenger, FaMailBulk, FaWhatsapp} from 'react-icons/fa'

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_poc5puu', 'template_bgiz7qv', form.current, 'jKDrzxkTwW9b42gpn')
        e.target.reset()
      };

  return (
    <section className="container contact" id="contact">
        <div className="contact--container">
            <Pretitle h5='get in touch' h1='contact'/>
            <div className="links">
                <div className="email">
                    <FaMailBulk className='i'/>
                    <h5>email</h5>
                    <p>marhoul.djalil@gmail.com</p>
                    <a href="mailto: marhoul.djalil@gmail.com">Send a message</a>
                </div>
                <div className="messenger">
                    <FaFacebookMessenger className='i'/>
                    <h5>messenger</h5>
                    <p>khalilo.fatiga</p>
                    <a href="https://m.me/khalilo.sba" target='_blank' rel="noreferrer">Send a message</a>
                </div>
                <div className="whatsapp">
                    <FaWhatsapp className='i'/>
                    <h5>WhatsApp</h5>
                    <p>+123-456-789</p>
                    <a href="https://api.whatsapp.com/send?phone=+213667495052" target='_blank' rel="noreferrer">Send a message</a>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='fullName' placeholder='your full name' autoComplete='off' required/>
                <input type="email" name='email'placeholder='your email' autoComplete='off' required/>
                <textarea name="message" placeholder='your message' id="" cols="30" rows="10" minLength={50} required></textarea>
                <button className="btn-primary">send message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact