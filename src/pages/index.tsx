import React, { useEffect, useState, ReactElement, useRef } from 'react'

import { Swiper as SwiperComponent } from 'swiper/react'
import Swiper, { SwiperSlide } from '@/components/Swiper'
import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/Home'
import useResize from '@/hooks/useResize'

const items = [
  {
    title: 'Branding and Identity',
    subTitle: 'Pixflow Studio',
    img: 'http://www.themezaa.com/html/pofo/images/homepage-2-slider-img-9.jpg'
  },
  {
    title: 'Branding and Brochure',
    subTitle: 'Tailoring Interior',
    img: 'http://www.themezaa.com/html/pofo/images/homepage-2-slider-img-4.jpg'
  },
  {
    title: 'Digital Media',
    subTitle: 'Web and Photography',
    img: 'http://www.themezaa.com/html/pofo/images/homepage-2-slider-img-13.jpg'
  },
  {
    title: 'Branding and Identity',
    subTitle: 'HardDot Stone',
    img: 'http://www.themezaa.com/html/pofo/images/homepage-2-slider-img-12.jpg'
  },
  {
    title: 'Web and Photography',
    subTitle: 'Violator Series',
    img: 'http://www.themezaa.com/html/pofo/images/homepage-2-slider-img-10.jpg'
  },
  {
    title: 'Branding and Identity',
    subTitle: 'Banana Design',
    img: 'http://www.themezaa.com/html/pofo/images/homepage-2-slider-img-11.jpg'
  }
]
export default function Home(): ReactElement {
  const SwiperRef = useRef<SwiperComponent>(null)
  const SwiperWidth = useResize<SwiperComponent>(SwiperRef)

  const configs = {
    updateOnWindowResize: true,
    allowTouchMove: true,
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: true,
    spaceBetween: 30,
    keyboardControl: true,
    speed: 1000,
    pagination: {
      el: null
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      hide: false,
      snapOnRelease: true
    },
    mousewheel: {
      enable: true
    },
    keyboard: {
      enabled: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      767: {
        scrollbar: {
          hide: true
        },
        spaceBetween: 0,
        autoHeight: true,
        centeredSlides: false,
        slidesOffsetAfter: 85
      }
    }
  }

  useEffect(() => {
    const windowWidth = window.innerWidth
    const swiperBottomScrollbarFull = SwiperRef.current

    if (swiperBottomScrollbarFull) {
      if (windowWidth <= 767) {
        console.log(swiperBottomScrollbarFull)
        swiperBottomScrollbarFull.direction = 'vertical'
        // swiperBottomScrollbarFull.detachEvents()
      } else {
        swiperBottomScrollbarFull.direction = 'horizontal'
        // swiperBottomScrollbarFull.attachEvents()
      }
    }
  }, [SwiperWidth])

  return (
    <Container>
      <SEO title="Home" description={'Olá eu sou a description'} />
      <div className="swiper-container">
        <Swiper ref={SwiperRef} {...configs}>
          <SwiperSlide className="swiper-slide first">
            <div className="item">
              <h4 className="text-medium-gray display-block margin-5px-bottom alt-font">
                Hello,
              </h4>
              <h6 className="text-medium-gray font-weight-300 margin-20px-bottom alt-font">
                I&apos;m Colin Smith
              </h6>
              <p className="text-large dispaly-block pull-left font-weight-300 width-90 margin-35px-bottom">
                I design thoughtful digital experiences e beautiful brand
                aesthetics. I provide high quality web design services.
              </p>
              <img
                src="http://www.themezaa.com/html/pofo/images/signature.png"
                className="width-60 signature"
                alt=""
              />
            </div>
          </SwiperSlide>

          {items.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="item">
                <img src={item.img} alt={item.title} />
                <p className="bottom-text">{item.title}</p>
              </div>
              <div className="hover-title-box">
                <div className="separator" />
                <h3>
                  <a href="single-project-page-01.html">{item.subTitle}</a>
                </h3>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="swiper-slide"></SwiperSlide>
        </Swiper>

        <div className="swiper-scrollbar" />
        <div className="swiper-pagination" />
      </div>
    </Container>
  )
}
