import React from 'react'
import './testimonials.css'
import ME from '../../assets/sjsu.jpg'

import { Navigation } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

const data = [
  {
    avatar: ME,
    name: "Dean's scholar",
    review: "Awarded to students who have a GPA higher than 3.65 in a specific semester"
  },

  {
    avatar: ME,
    name: "Dean's scholar",
    review: "Awarded to students who have a GPA higher than 3.65 in a specific semester"
  },

  {
    avatar: ME,
    name: "Dean's scholar",
    review: "Awarded to students who have a GPA higher than 3.65 in a specific semester"
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
              <img src={ME} alt="here is a picture of a logo" />
            </div>  
            <h5 className="award__name">Dean's scholar</h5>
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