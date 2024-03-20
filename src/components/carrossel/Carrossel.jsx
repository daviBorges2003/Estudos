import React from 'react'
import {Swiper} from 'swiper/react'


import './Carrossel.css'

const Carrossel = ({children , perview ,navigation,pagType}) => {

  return (
    <div className='Carrossel'>
      <Swiper
        navigation={navigation}
        className='Carrosel'
        slidesPerView={perview}
        pagination={pagType}
        centeredSlides='true'
        centeredSlidesBounds='true'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      > 
        {
          children
        }
      </Swiper>

    </div>
  )
}

export default Carrossel