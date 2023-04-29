import React from 'react'
import './Portfolio.scss'
import Pretitle from '../Pretitle/Pretitle'
import img1 from './original-0555fa494283a2ca8e58e1755bc94e96.webp'
import img2 from './original-18031949f352139933ed6a160e82a1c8.webp'
import img3 from './original-745458194a46ea6e2373e3a3cbdc221e.webp'
import img4 from './original-8be495bc00af82b939c4e979fce77f58.webp'
import img5 from './original-acf037cada7c6f6759cf6b55c14e3232.webp'
import img6 from './original-cdff3db44b0ff328917a147ed16cec7d.webp'

function Portfolio(props) {

    const portfolios = [
        {
            img: img1,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, porro.'
        },
        {
            img: img2,
            desc: 'Lorem ipsum dolor, sit amet consect.'
        },
        {
            img: img3,
            desc: 'Lorem ipsum dolor, sit amet consectetur.'
        },
        {
            img: img4,
            desc: 'Lorem ipsum dolor, sit amet consectetur.'
        },
        {
            img: img5,
            desc: 'Lorem ipsum dolor, sit amet consg elit. Neque, porro.'
        },
        {
            img: img6,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing .'
        },
    ]

  return (
    <section className="container portfolio" id="portfolio">
        <div className="portfolio--container">
            <Pretitle h5='my recent work' h1='portfolio'/>
            {portfolios.map(({img,desc},index) =>  {
                return (
                <article key={index+1}>
                    <img src={img} alt="" width='100px'/>
                    <p>{desc}</p>
                    <div className="btns">
                        <button className="btn">Github</button>
                        <button className="btn-primary">Live Demo</button>
                    </div>
                </article>
                )})}
        </div>
    </section>
  )
}

export default Portfolio