import React from 'react'
import Pretitle from '../Pretitle/Pretitle'
import './Experience.scss'
import {motion} from 'framer-motion'
import fadeIn from '../../Variants.js'
import {BsPatchCheckFill} from 'react-icons/bs'

function About(props) {
  return (
    <section className="container experience" id="experience">
        <div className="experience--container">
            <Pretitle h5='what skills i have' h1='my experience'/>
            <motion.div className="front-end" variants={fadeIn('right')} initial='hidden' animate='visible'>
              <h3>frontend development</h3>
              <ul>
                <li><BsPatchCheckFill className='i'/>HTML<span>Experienced</span></li>
                <li><BsPatchCheckFill className='i'/>JavaScript<span>Experienced</span></li>
                <li><BsPatchCheckFill className='i'/>Tailwind<span>Experienced</span></li>
                <li><BsPatchCheckFill className='i'/>CSS<span>Intermediate</span></li>
                <li><BsPatchCheckFill className='i'/>Bootstrap<span>Experienced</span></li>
                <li><BsPatchCheckFill className='i'/>React<span>Experienced</span></li>
              </ul>
            </motion.div>
            <motion.div className="back-end" variants={fadeIn('left')} initial='hidden' animate='visible'>
              <h3>backend development</h3>
              <ul>
                <li><BsPatchCheckFill className='i'/>Node JS<span>Intermediate</span></li>
                <li><BsPatchCheckFill className='i'/>PHP<span>Basic</span></li>
                <li><BsPatchCheckFill className='i'/>Python<span>Intermediate</span></li>
                <li><BsPatchCheckFill className='i'/>MongoDB<span>Experienced</span></li>
                <li><BsPatchCheckFill className='i'/>MySQL<span>Intermediate</span></li>
              </ul>
            </motion.div>
        </div>
    </section>
  )
}

export default About;