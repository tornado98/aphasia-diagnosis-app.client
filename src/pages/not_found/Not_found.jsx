import React from 'react';
import{Link} from 'react-router-dom';
import { Footer } from '../../components';
import { Navbar } from '../../components';

import './Not_found.css';

const Not_found = () => {
  return (
    <>
    <Navbar/> 
    <section>
      <div className="container notfound__container">
        <h2>صفحه مورد نظر پیدا نشد ۴۰۴</h2>
        <Link to="/" className="btn">بازگشت به خانه</Link>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Not_found