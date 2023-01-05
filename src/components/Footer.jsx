import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    خوشحال میشیم به ما در این زمینه کمک کنید ما یک استراتاپ جدید هستیم که برای شناسایی و حل مشکلات بیماران افازی اپلیکیشنی توسعه دادیم که به شما در این زمینه کمک کند
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'>
                        <FaLinkedin/>
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'>
                        <FaFacebookF/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'>
                        <AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'>
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>
            <article>
                <h4>پیوند ها</h4>
                <Link to="/about">درباره ما</Link>
                <Link to="/description">توضیحات</Link>
                <Link to="/plans">برنامه های ما</Link>
                <Link to="/ourtimes">تیم ما</Link>
                <Link to="/contact"> تماس با ما</Link>
            </article>
            <article>
                <h4>لینک ها</h4>
                <Link to="/s">بلاگ</Link>
                <Link to="/s">مورد ها</Link>
                <Link to="/s">رویداد ها</Link>
                <Link to="/s">جوامع</Link>
                <Link to="/s">پرسش و پاسخ</Link>
            </article>
            <article>
                <h4>دسترسی ها</h4>
            </article>
        </div>
        <div className="footer__copyright">
                <small> توسعه داده شده با ❤️ توسط محمد رضا مسرورطاهری </small>
                <a href="https://github.com/tornado98">
                    &copy; All Rights Reserved for tornado98 2023
                    <AiFillGithub/>
                </a>

            </div>
    </footer>
  )
}

export default Footer