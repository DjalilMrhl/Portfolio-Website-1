import React from 'react'
import './Testimonials.scss'
import Pretitle from '../Pretitle/Pretitle'
import img1 from './maxime-loiselle.jpeg'
import img2 from './Customer-testimonial-page.webp'
import img3 from './portrait-confident-young-business-woman-260nw-1593222007.webp'
import img4 from './portrait-mature-business-woman-smiling-260nw-1593894763.webp'
import img5 from './test24-4.jpeg'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.css'
import {Pagination, Navigation} from 'swiper'
import 'swiper/swiper-bundle.css'

function Testimonials() {

    const testimonials = [
        {
            img: img1,
            fullName: 'jacob frye',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex, minima cumque, id, reprehenderit mollitia ratione modi suscipit rerum exercitationem voluptate quasi hic nostrum! Distinctio autem fugiat labore aliquam unde?'
        },
        {
            img: img2,
            fullName: 'lara croft',
            description: 'Lorem ipsum dolor, llat reiciendis nam eum dolore voluptatibus asperiores? Voluptate perspiciatis at aspernatur quis sed qui a facilis libero voluptas consectetur suscipit ratione natus, blanditiis hic eligendi. Accusamus, cum?'
        },
        {
            img: img3,
            fullName: 'edward kenway',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex, minima cumque, id, reprehenderit mollitia ratione modi suscipit rerum exercitationem voluptate quasi hic nostrum! Distinctio autem fugiat labore aliquam unde?'
        },
        {
            img: img4,
            fullName: 'james delany',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex, minima cumque, id, reprehenderit mollitia ratione modi suscipit rerum exercitationem voluptate quasi hic nostrum! Distinctio autem fugiat labore aliquam unde?'
        },
        {
            img: img5,
            fullName: 'thomas shelby',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex, minima cumque, id, reprehenderit mollitia ratione modi suscipit rerum exercitationem voluptate quasi hic nostrum! Distinctio autem fugiat labore aliquam unde?'
        }
    ]

  return (
    <section className="container testimonials" id="testimonials">
        <div className="testimonials--container">
            <Pretitle h5='review from lients' h1='testimonials'/>
            <Swiper modules={[Pagination, Navigation]} spaceBetween={50} slidesPerView={1} pagination={{clickable:true}} navigation>
            {testimonials.map(({img,fullName,description},index)=> {
                return (
                    <SwiperSlide key={index+1}>
                        <article >
                            <img src={img} alt={fullName}/>
                            <h2>{fullName}</h2>
                            <p className='text-light'>{description}</p>
                        </article>
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials