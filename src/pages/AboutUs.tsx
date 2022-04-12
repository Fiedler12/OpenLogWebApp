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
      
    



     <div className='format' >
       <ul className='container'>
         <li className='text2'>Creator</li>
         <li>Alexander Solomon S201172</li>
         <li>Chenxi Cai S205420</li>
         <li>Isabel G.Jacobsen S205473</li>
         <li>Oliver Fiedler S205423</li>
         <li>Tobias L. Borgstørm S184810 </li>

       </ul>
       <ul className='container'> 
         <li className='text2'>Features</li>
         <li>Log data</li>
         <li>See previous data</li>
         <li>delete/save data</li>
         <li>Edit data</li>
         
       </ul>
       <ul className='container'>
         <li className='text2'>Contact</li>
         <li>22222222</li>
         <li>Openlogsvej 1.</li>
         <li>openlog@gmail.com</li>
       </ul>

     </div>
     


    </div>

    
  
  )
}

