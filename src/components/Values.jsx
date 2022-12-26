import React from 'react'
import {GiCutDiamond} from 'react-icons/gi';
import SectionHead from './SectionHead';
import Card from '../UI/Card';
import Image from '../images/values.jpeg';
import { values } from '../data';

import './Values.css';



const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
        <div className="values__right">
              <SectionHead icon={<GiCutDiamond/>} title="مزیت ها"/>
              <p>
                  این اپ خوبه این اپ به شما و دوتانتان برای کمک به شناسایی الایم بیماری افازی کمک می کند
              </p>
              <div className="values__wrapper">
                {
                  values.map(({id, icon, title, desc}) => {
                      return(
                        <Card key={id} className="values__value" >
                          <span>{icon}</span>
                          <h4>{title}</h4>
                          <small>{desc}</small>
                        </Card>
                      )   
                  })
                }
              </div>
            </div>
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values Image" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Values