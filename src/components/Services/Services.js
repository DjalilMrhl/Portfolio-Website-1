import React from 'react'
import Pretitle from '../Pretitle/Pretitle'
import './Services.scss'
import {AiOutlineCheck} from 'react-icons/ai'

function Services(props) {

    return (
    <section className="container services" id="services">
        <div className="services--container">
            <Pretitle h5='what i offer' h1='services'/>
            <article>
                    <h3>UI/UX design</h3>
                <ul>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                </ul>
            </article>
            <article>
                    <h3>web development</h3>
                <ul>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur  elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                </ul>
            </article>
            <article>
                    <h3>content creation</h3>
                <ul>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                    <li><AiOutlineCheck className='i'/>Lorem ipsum dolor sit amet consectetur elit.</li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services;