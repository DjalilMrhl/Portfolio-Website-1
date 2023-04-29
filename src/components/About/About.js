import React from 'react'
import Pretitle from '../Pretitle/Pretitle'
import './About.scss'
import img from './a8e864d04c95572d1aece099af852d0a-1611046655.jpeg'
import {FaAward, FaFolder, FaUsers} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {motion} from 'framer-motion'
// import {useInView} from 'react-intersection-observer'
import fadeIn from '../../Variants.js'

function About(props) {
    // const [ref, inView] = useInView()
  return (
    <section className="container about" id="about">
        <div className="about--container">
            <Pretitle h5='get to know' h1='about me'/>
            <motion.div className='image--container' variants={fadeIn('right')} initial='hidden' animate='visible' viewport={{once:false}}>
                <img src={img} alt="" />
            </motion.div>
            <div className='description--container'>
                <div className='cards'>
                    <div className="card">
                        <FaAward className='i'/>
                        <h5>experience</h5>
                        <p className="text-light">3+ years working</p>
                    </div>
                    <div className="card">
                        <FaUsers className='i'/>
                        <h5>clients</h5>
                        <p className="text-light">300+ worldwide</p>
                    </div>
                    <div className="card">
                        <FaFolder className='i'/>
                        <h5>projects</h5>
                        <p className="text-light">80+ completed</p>
                    </div>
                </div>
                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, dolorem impedit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore recusandae rem hic cupiditate aliquid doloremque aliquam dolorem ducimus nobis.</p>
                <LinkS to='contact' spy={true} smooth={true} offset={0} duration={700}><button className='btn-primary'>let's talk</button></LinkS>
            </div>
        </div>
    </section>
  )
}

export default About