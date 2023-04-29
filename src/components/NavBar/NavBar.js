import React from 'react'
import './NavBar.scss'
import {Link as LinkS} from 'react-scroll'
import { BiBook, BiHomeAlt, BiMessageDetail, BiUser } from 'react-icons/bi'
import {FaArchive} from 'react-icons/fa'
import {motion} from 'framer-motion'

function NavBar(props) {

  return (

    <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:1}}>
        <ul>
            <li>
                <LinkS to='home' spy={true} smooth={true} offset={-200} duration={500}><BiHomeAlt/></LinkS>
            </li>
            <li>
                <LinkS to='about' spy={true} smooth={true} offset={-100} duration={500}><BiUser/></LinkS>
            </li>
            <li>
                <LinkS to='experience' spy={true} smooth={true} offset={-100} duration={500}><BiBook/></LinkS>
            </li>
            <li>
                <LinkS to='services' spy={true} smooth={true} offset={-100} duration={500}><FaArchive/></LinkS>
            </li>
            <li>
                <LinkS to='contact' spy={true} smooth={true} offset={0} duration={500}><BiMessageDetail/></LinkS>
            </li>
        </ul>
    </motion.nav>
  )
}

export default NavBar