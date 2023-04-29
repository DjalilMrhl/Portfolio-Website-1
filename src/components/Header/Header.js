import React from 'react'
import './Header.scss'
import {Link as LinkS} from 'react-scroll'
import img from './4.webp'
import {FaLinkedin, FaGithub, FaDribbble} from 'react-icons/fa'

function Header(props) {
  return (
    <header className='container' id='home'>
        <div className="header--container text-align">
            <h5>Hello, I'm</h5>
            <h1>Fa Ti Ga</h1>
            <h5 className='text-light'>front-end developer</h5>
            <div className='btns'>
                <LinkS to='contact' spy={true} smooth={true} offset={0} duration={700}><button className='btn'>download CV</button></LinkS>
                <LinkS to='contact' spy={true} smooth={true} offset={0} duration={700}><button className='btn-primary'>let's talk</button></LinkS>
            </div>
            <div className="image--container">
                <img src={img} alt="" />
            </div>
            <div className='links'>
                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="http://github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <a href="http://dribbble.com" target="_blank" rel="noopener noreferrer"><FaDribbble/></a>
                <span></span>
            </div>
            <LinkS to='contact' spy={true} smooth={true} offset={0} duration={700}>Scroll Down</LinkS>
        </div>
    </header>
  )
}

export default Header