import React from 'react';
import {FaCrown} from 'react-icons/fa';
import {features} from '../data';
import Card from '../UI/Card';
import {Link} from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';

import './Features.css';
import SectionHead from './SectionHead';

const Features = () => {
  return (
    <section className="features-container">
      <div className="container features__container">
          <SectionHead icon={<FaCrown />} title="اپشن ها"/>
          <div className="features__wrapper">
        {
          features.map(({id, icon, title, info, path}) => {
            return (
                <Card className="features__feature" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn-g sm">بیشتر بخوانید <AiFillCaretLeft/> </Link>


                </Card>
            )
          })

        }

        

      </div>
      </div>

    </section>
  )
}

export default Features