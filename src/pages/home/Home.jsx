import React from 'react';


import { MainHeader } from '../../components';


import './Home.css';
import { Navbar } from '../../components';
import { Features } from '../../components';
import { Values } from '../../components';
import { FAQs } from '../../components';
import { Testimonials } from '../../components';




const Home = () => {
  return (
    <>
          
         <title>وب اپلیکیشن تشخیص آفازی | Aphasia diagnosis program</title>
      <Navbar/>   
      <MainHeader/>
      <Features/>
      <Values/>
      <FAQs/>
      <Testimonials/> 
    </>
    

  )
}

export default Home