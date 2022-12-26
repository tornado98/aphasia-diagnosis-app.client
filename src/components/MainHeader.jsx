import React from 'react';
import {Link} from 'react-router-dom';
import Images from '../images/mainheaderImg.svg';

import './MainHeader.css';

function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-right">
          <h2>آفازی چیست؟</h2>
          <h4>آفازی یک اختلال ارتباطی است که به دلیل آسیب مغزی در یک یا چند منطتقه که کنترل زبان را انجام می دهند اتفاق می افتد. این مشکل می تواند در ارتباط کلامی و ارتباط نوشتاری یا هر دو اختلال ایجاد کند. همچنین می تواند در توانایی زیر مشکلاتی ایجاد کند:خواندن، نوشتن، صحبت کردن، فهم گفتار، گوش دادن.  </h4>
          <h2>علایم بیماری افازی چیست؟</h2>
          <h4>علائم آفازی از خفیف تا شدید متفاوت است. این علائم به محل آسیب در مغز و شدت آسیب بستگی دارند.</h4>
          <p> وب اپلیکیشن ما به شما کمک می کند تا به تنهایی تشخیص دهید ایا درگیر اختلال افازی هستید یا نه ؟😀</p>
          
          <Link to="/user_register" className="btn-g lg">
            ثبت نام کنید 
          </Link>

        </div>
        <div className="main__header-left">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={Images} alt="Main Header Image" />
            </div>

          </div>

        </div>
      </div>
    </header>
    
  )
}

export default MainHeader