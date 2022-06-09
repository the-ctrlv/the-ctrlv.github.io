import facebookLogo from '../../assets/images/facebook-logo.svg'
import instagramLogo from '../../assets/images/instagram-logo.svg'
import pretzelLogo from '../../assets/images/logo.svg'
import pinterestLogo from '../../assets/images/pinterest-logo.svg'
import telegramLogo from '../../assets/images/telegram-logo.svg'
import twitterLogo from '../../assets/images/twitter-logo.svg'
import { serviceLinks } from './helpers'

import './style.scss'


function Footer() {
    return (
        <footer className="footer">
            <div className="container-xl">
                <ul className='d-flex flex-column flex-md-row justify-content-between flex-md-wrap flex-lg-nowrap pt-5'>
                    <li className='mt-4 mt-md-0 mb-5 mb-lg-0 text-center text-md-start order-last 
            order-md-first col-md-6 col-lg-auto'>
                        <img src={pretzelLogo} alt="Pretzel Logo" className='mb-4' />
                        <div className='footer__logo-container d-flex justify-content-between col-6 col-lg-12'>
                            <a href='/'>
                                <img src={facebookLogo} alt="Facebook Logo" />
                            </a>
                            <a href='/'>
                                <img src={twitterLogo} alt="Twitter Logo" />
                            </a>
                            <a href="/">
                                <img src={instagramLogo} alt="Instagram Logo" />
                            </a>
                            <a href="/">
                                <img src={pinterestLogo} alt="Pinterest Logo" />
                            </a>
                        </div>
                    </li>
                    <li className='mb-4 col-md-6 col-lg-auto d-flex d-lg-block order-md-2 order-lg-0'>
                        <a href='/' className='d-block fw-bold'>
                            Plans
                        </a>
                        <a href='/' className='d-block fw-bold mx-3 mx-lg-0'>
                            FAQ
                        </a>
                        <a href='/' className='d-block fw-bold'>
                            Login
                        </a>
                    </li>
                    <li className='col-md-4 mb-4 col-md-6 col-lg-4'>
                        <span className='fw-bold user-select-none'>Services</span>
                        <ul className="d-flex flex-wrap">
                            {serviceLinks.map((link, index) => (
                                <li key={index} className='w-50'>
                                    <a href='/'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className='stay-in-touch-container p-2 pt-4 rounded col-md-6 col-lg-auto order-4'>
                        <span className='fw-bold d-block'>Lets stay in touch!</span>
                        <p className='my-2'>Subscribe our newsletter</p>
                        <form className='d-flex form-group footer__form rounded'>
                            <input type="text" placeholder="Enter email" className='pretzel-input dark flex-grow-1' />
                            <button type="submit" className='btn'>
                                <img src={telegramLogo} alt="Submit Telegram Logo" />
                            </button>
                        </form>
                    </li>
                </ul>
                <div className='copyright w-100 text-center mt-4'>
                    <p className='pt-4 pb-5 user-select-none'>© Copyright 2021 Pretzel</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer