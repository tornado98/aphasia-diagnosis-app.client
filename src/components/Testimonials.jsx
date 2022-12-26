import React from 'react';
import './Testimonials.css';
import SectionHead from './SectionHead';
import {ImQuotesLeft} from 'react-icons/im';
import Card from "../UI/Card";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import { testimonials } from "../data";
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container testimonials__container"></div>
    </section>
  )
}

export default Testimonials