import React, { useEffect } from 'react';


import { FiSettings } from 'react-icons/fi';
import { Navbar } from '../../components';
import { Footer } from '../../components';




import './User_dashbord.css';

const User_dashbors = () => {

  const date = new Date();
  const today = new Intl.DateTimeFormat('fa-IR' , { dateStyle: 'full', timeStyle: 'long' }).format(date);
  return (
    <>
      <Navbar/>
      <section>
        <p>{today}</p>
      </section>
      
      <Footer/>
    </>
  )
}

export default User_dashbors