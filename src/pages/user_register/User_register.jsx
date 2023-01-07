import React from 'react';

import { useState } from 'react';

import Log from '../../images/log.svg';

import Register from '../../images/register.svg';

import Register2 from '../../images/register2.svg';


import { BiUserCircle } from 'react-icons/bi';

import { RiLockPasswordLine } from 'react-icons/ri';

import { BsGoogle } from 'react-icons/bs';

import { BsTwitter } from 'react-icons/bs';

import { ImLinkedin2 } from 'react-icons/im';

import { FaRegEnvelope } from 'react-icons/fa';

import { Navbar } from '../../components';
import { Footer } from '../../components';

import './User_register.css';




const User_register = () => {
  const [containerActive, setContainerActive] = useState(false);
  const signUpButton = () => {
    setContainerActive(true);
  };
  const signInButton = () => {
    setContainerActive(false);
  };






  return (
    <>
      <title>ثبت نام و ورود</title>
      <Navbar/> 
      <div className={`container container__form ${containerActive && "sign-up-mode"}`} id="container">
        <div className="form__continer">
          <div className="signin__signup">
            <form action="" className="sgin__in-form">
              <h2 className="form__title">ورود</h2>
              <div className="input__field">
                <BiUserCircle />
                <input type="text" placeholder="نام کاربری"/>
              </div>
              <div className="input__field">
                <RiLockPasswordLine />
                <input type="password" placeholder="رمز عبور"/>
              </div>
              <input type="submit" value="ورود" className="btn solid" />
                <p className='social__text'> یا ورور با پلتفرم های زیر </p>
                <div className="social__media">
                  <a href="" className="social__icon">
                    <BsGoogle />
                  </a>
                  <a href="" className="social__icon">
                    <BsTwitter />
                  </a>
                  <a href="" className="social__icon">
                    <ImLinkedin2 />
                  </a>

                </div>
            </form>


            <form action="" className="sgin__up-form">
              <h2 className="form__title">ثبت نام</h2>
              <div className="input__field">
                <BiUserCircle />
                <input type="text" placeholder="نام کاربری"/>
              </div>
              <div className="input__field">
                <FaRegEnvelope />
                <input type="email" placeholder="ایمیل"/>
              </div>
              <div className="input__field">
                <RiLockPasswordLine />
                <input type="password" placeholder="رمز عبور"/>
              </div>
              <input type="submit" value="ثبت نام" className="btn solid" />
                <p className='social__text'> یا ورور با پلتفرم های زیر </p>
                <div className="social__media">
                  <a href="" className="social__icon">
                    <BsGoogle />
                  </a>
                  <a href="" className="social__icon">
                    <BsTwitter />
                  </a>
                  <a href="" className="social__icon">
                    <ImLinkedin2 />
                  </a>

                </div>
            </form>
          </div>

        </div>

        <div className="panels__continer" >
          <div className="panel right-panel">
            <div className="content">
              <h3>وارد شو!</h3>
              <p>قبلا ثبت نام کردی پس به راحتی وارد شو</p>
               <button className="btn transparent" onClick={signInButton}  id="signIn">
                  ورود
               </button>
            </div>
            <img src={Register} className="image" alt="log-pic" />
            
          </div>
          <div className="panel left-panel">
            <div className="content">
              <h3>تازه با ما اشنا شدی؟</h3>
              <p>نگران نباش به راحتی می تونی ثبت نام کنی و یکی ار خانواده ما باشی به راحتی و اسونی</p>
               <button className="btn transparent" onClick={signUpButton}  id="signUp">
                  ثبت نام کن

               </button>
            </div>
            <img src={Log} className="image" alt="log-pic" />
            
          </div>

        </div>

      </div>
      <Footer/>

    </>  
    
  )
}

export default User_register