import { useEffect, useState } from 'react'

import facebookLogo from '../../assets/images/facebook-logo.svg'
import instagramLogo from '../../assets/images/instagram-logo.svg'
import pretzelLogo from '../../assets/images/logo.svg'
import telegramLogo from '../../assets/images/telegram-logo.svg'
import twitterLogo from '../../assets/images/twitter-logo.svg'
import { serviceLinks } from './helpers'

import './style.scss'


function Footer({ setShowModal, setFooterEmail }) {

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setFooterEmail(inputValue)
    }, [inputValue])

    return (
        <footer className="footer">
            <div className="container-xl pt-5 px-md-4">
                <ul className='d-flex flex-column flex-md-row justify-content-between flex-md-wrap flex-lg-nowrap pt-5 px-xl-5'>
                    <li className='me-xl-5 pe-xl-5 mt-4 mt-md-0 mb-5 mb-lg-0 text-center text-md-start order-last 
            order-md-first col-md-6 col-lg-auto'>
                        <img src={pretzelLogo} alt="Pretzel Logo" className='mb-4' />
                        <div className='footer__logo-container d-flex justify-content-center 
                        justify-content-md-start col-6 col-lg-12 px-1'>
                            <a href='/'>
                                <img src={facebookLogo} alt="Facebook Logo" />
                            </a>
                            <a href='/' className='mx-4'>
                                <img src={twitterLogo} alt="Twitter Logo" />
                            </a>
                            <a href="/">
                                <img src={instagramLogo} alt="Instagram Logo" />
                            </a>
                        </div>
                    </li>
                    <li className='mb-4 col-md-6 col-lg-auto d-flex d-lg-block order-md-2 order-lg-0'>
                        <a href='/' className='d-block fw-bold mb-3'>
                            Plans
                        </a>
                        <a href='/' className='d-block fw-bold mx-3 mx-lg-0 mb-3'>
                            FAQ
                        </a>
                        <a href='/' className='d-block fw-bold'>
                            Login
                        </a>
                    </li>
                    <li className='col-md-4 mb-4 col-md-6 col-lg-4 col-xl-3' style={{ minWidth: '300px' }}>
                        <h5 className='fw-bold user-select-none mb-3'>Services</h5>
                        <ul className="d-flex flex-wrap">
                            {serviceLinks.map((link, index) => (
                                <li key={index} className='w-50'>
                                    <a href='/' className='text-nowrap'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className='stay-in-touch-container p-2 pt-4 rounded col-md-6 col-lg-3 ms-lg-5 order-4'>
                        <span className='fw-bold d-block'>Lets stay in touch!</span>
                        <p className='my-2'>Subscribe our newsletter</p>
                        <form className='d-flex form-group footer__form rounded'>
                            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}
                                placeholder="Enter email" className='pretzel-input dark flex-grow-1' />
                            <button type="button" className='btn'
                                onClick={() => setShowModal(true)}>
                                <img src={telegramLogo} alt="Submit Telegram Logo" />
                            </button>
                        </form>
                    </li>
                </ul>
                <div className='copyright text-center mt-3 mx-xl-5'>
                    <p className='pt-4 pb-5 user-select-none'>© Copyright 2022 Pretzel</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer