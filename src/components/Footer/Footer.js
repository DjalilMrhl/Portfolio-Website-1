import React from 'react'
import './Footer.scss'
import {Link as LinkS} from 'react-scroll'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className="footer--container">
            <h1>FaTiGa</h1>
            <ul>
                <li><LinkS to='home' spy={true} smooth={true} offset={-200} duration={500}>home</LinkS></li>
                <li><LinkS to='about' spy={true} smooth={true} offset={-200} duration={500}>about</LinkS></li>
                <li><LinkS to='experience' spy={true} smooth={true} offset={-200} duration={500}>experience</LinkS></li>
                <li><LinkS to='services' spy={true} smooth={true} offset={-100} duration={500}>services</LinkS></li>
                <li><LinkS to='portfolio' spy={true} smooth={true} offset={-100} duration={500}>portfolio</LinkS></li>
                <li><LinkS to='testimonials' spy={true} smooth={true} offset={-100} duration={500}>testimonials</LinkS></li>
            </ul>
            <div className="links">
                <FaFacebookSquare/>
                <FaInstagramSquare/>
                <FaTwitterSquare/>
            </div>
            <p>© FATIGA Tutorials. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer