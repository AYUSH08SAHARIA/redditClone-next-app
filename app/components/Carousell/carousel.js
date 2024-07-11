"use client"
import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./caraousel.css"
import Image from 'next/image'
import carousel1 from './carousel1.png'
import carousel2 from './carousel2.png'
import carousel3 from './carousel3.png'
import carousel4 from './carousel4.png'
import carousel5 from './carousel5.png'



export default function caraousel() {
  return (
    <div className='car'> 
   
    <Carousel className='main_card'> 
        <div> 
            <Image
             src={carousel1}
             alt="image1"

             /> 
            

        </div> 
        <div> 
            <Image
              src={carousel2}
              alt="image2" /> 
            
        </div> 
        <div> 
            <Image
              src={carousel3}
              alt="image3"/> 
            

        </div> 
        <div>   
            <Image 
              src={carousel4}
              alt="image4"/> 
            

        </div> 
        <div> 
            <Image
              src={carousel5}
              alt="image5"/> 
            
        </div> 
    </Carousel> 
  </div> 
  )
}

