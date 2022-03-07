import React from "react";
import "./Testimoniols.css";
import Zillay from "../../assets/zillay.jpg"
import Mesum from "../../assets/mesum.jpg"
import Ammad from "../../assets/ammad.jpg"

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data=[{
  image: Ammad,
  name: 'Ammad',
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptate, ut corrupti quasi officiis optio recusandae illo fuga minima explicabo?"
},
{
  image: Zillay,
  name: 'Zillay',
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptate, ut corrupti quasi officiis optio recusandae illo fuga minima explicabo?"

},
{
  image: Mesum,
  name: 'Mesum',
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptate, ut corrupti quasi officiis optio recusandae illo fuga minima explicabo?"

},
]

const Testimoniols = () => {
  return (
    <section id="Testimoniols">
      <h5>Review From Client</h5>
      <h2>Testimonilas</h2>

      <Swiper className="container container-testiminials"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({image,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client-img">
            <img src={image}/>
          </div>
          <h5 className="client-name">{name}</h5>
          <small className="client-review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimoniols;
