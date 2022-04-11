import { Container, Grid } from '@mui/material';
import React from 'react'
import '../css_files/AboutUs.css';
import img from '../Pictures/App.png';



export const AboutUs = () => {
  return (
    <div>
      <h1 className='header'>What is OpenLog</h1>
      <p className='text'>OpenLog allows you to log and keep track
      of any disired data
      You can costumize your units and categories of your choosing</p>
      <h2 className='header'>About our APP</h2>
     <img src={img} className = 'image'/>



     <div >
      
     </div>
     


    </div>

    
  
  )
}

