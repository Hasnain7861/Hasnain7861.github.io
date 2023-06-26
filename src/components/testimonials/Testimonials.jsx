import React from 'react'
import './testimonials.css'
import ME from '../../assets/sjsu.jpg'
import CodePath from '../../assets/CodePath_Logo.jpg'

import { Navigation } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

const data = [
  {
    avatar: ME,
    name: "President's scholar",
    review: "Awarded to students who have a 4.0 GPA in a specific semester"
  },

  {
    avatar: ME,
    name: "Dean's scholar",
    review: "Awarded to students who have a GPA higher than 3.65 in a specific semester"
  },

  {
    avatar: CodePath,
    name: "CodePath Advanced Technical Interview Preperation",
    review: "Selected to take part in an 11 week course between June 2023 and August 2023 that prepares students for technical interviews."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
     <h2>Awards</h2>

     <Swiper className="container awards__container"
     navigation={true} modules={[Navigation]} onSwiper={(swiper) => console.log('slide change')}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className="testimonial">
            <div className="award__avatar">
              <img src={avatar} alt="here is a picture of a logo" />
            </div>  
            <h5 className="award__name">{name}</h5>
            <small className="award__review"> {review} </small>
       </SwiperSlide>
          )
        })
      }
    </Swiper>  
    </section>
  )
}

export default Testimonials