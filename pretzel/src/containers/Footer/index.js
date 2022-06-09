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
                <ul className='d-flex justify-content-between pt-5'>
                    <li>
                        <img src={pretzelLogo} alt="Pretzel Logo" className='mb-4' />
                        <div className='d-flex justify-content-between'>
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
                    <li>
                        <a href='/' className='d-block fw-bold'>
                            Plans
                        </a>
                        <a href='/' className='d-block fw-bold'>
                            FAQ
                        </a>
                        <a href='/' className='d-block fw-bold'>
                            Login
                        </a>
                    </li>
                    <li className='col-4'>
                        <span className='fw-bold'>Services</span>
                        <ul className="d-flex flex-wrap">
                            {serviceLinks.map((link, index) => (
                                <li key={index} className='w-50'>
                                    <a href='/'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className='stay-in-touch-container p-2 pt-4 rounded'>
                        <span className='fw-bold d-block'>Lets stay in touch!</span>
                        <p className='my-2'>Subscribe our newsletter</p>
                        <form className='d-flex form-group footer__form rounded'>
                            <input type="text" placeholder="Enter email" className='pretzel-input dark' />
                            <button type="submit" className='btn'>
                                <img src={telegramLogo} alt="Submit Telegram Logo" />
                            </button>
                        </form>
                    </li>
                </ul>
                <div className='copyright w-100 text-center mx-3 mt-5'>
                    <p className='pt-4 pb-5'>© Copyright 2021 Pretzel</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer