import appStore from '../../assets/images/app-store.svg';
import exchange from '../../assets/images/exchange.svg';
import googlePlay from '../../assets/images/google-play.svg';
import greenArrow from '../../assets/images/green-arrow.svg';
import location from '../../assets/images/location.svg';
import logo from '../../assets/images/logo.svg';
import { mockFooterLinks, mockFooterSocialLinks } from './mockFooterLinks';
import { StyledFooter } from './style';

function Footer() {

    return (
        <StyledFooter>
            <div className="container">
                <div className="top-footer d-xl-flex justify-content-between align-items-center border-bottom">
                    <div className="top-footer__left d-md-flex align-items-center justify-content-center 
                    mb-md-4 mb-xl-0">
                        <a href="#" className='me-3 d-block d-md-inline-block text-center text-xl-start'>
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="exchange rounded border d-flex px-4 py-2 align-items-center 
                        justify-content-center mt-3 mb-5 m-md-0">
                            <div className='d-flex'>
                                <img src={exchange} alt="exchange" className='me-2' />
                                <p className='me-4 fw-bold' >
                                    <span style={{ color: 'var(--primary)' }}>
                                        1 BUBO
                                    </span>{' '}
                                    = 1.4567 USD
                                </p>
                            </div>
                            <span className='info'>
                                24.12 <span className='text-success d-inline-block ms-2'>+0.5%</span></span>
                            <img src={greenArrow} alt="arrow" className='ms-1 h-100' />
                        </div>
                    </div>
                    <div className="top-footer__right d-md-flex align-items-center justify-content-center">
                        <p className='text-colored mb-4 mb-md-0 me-md-4 text-center text-lg-start'>
                            Get plugged in with the Budbo app!
                        </p>
                        <div className="download-links d-flex justify-content-center justify-content-md-end">
                            <a href="#" className='download-links'>
                                <img src={appStore} alt="App Store" />
                            </a>
                            <a href="#" className='ms-4 download-links'>
                                <img src={googlePlay} alt="Google Play" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="footer-content border-bottom">
                    <ul className='d-flex justify-content-between flex-wrap flex-xl-nowrap'>
                        {mockFooterLinks.map((item, index) => (
                            <li key={index} className="col-6 col-xl text-center text-xl-start mb-5 mb-xl-0">
                                <h5 className='mb-4'>{item.title}</h5>
                                <ul>
                                    {item.links.map((link, index) => (
                                        <li key={index} className="mb-2">
                                            <a href={link.link} className="text-colored">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li>
                            <h5>Subscribe to the free newsletter</h5>
                            <h6 className='text-colored mt-4 mb-3'>
                                Sign up and get 20% discount on your first order.</h6>
                            <div className='d-flex email-action'>
                                <input type="text" placeholder="Your email address"
                                    className='me-3 rounded flex-grow-1 border' />
                                <button className='btn btn-primary border-0 fw-bold'>Sign-up</button>
                            </div>
                            <div className='social-media d-flex mt-4'>
                                {mockFooterSocialLinks.map((item, index) => (
                                    <a key={index} href={item.link}>
                                        <img src={item.icon} alt={item.name} />
                                    </a>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bottom-footer w-100 d-lg-flex justify-content-between">
                    <div className="bottom-footer__left d-flex flex-wrap flex-lg-nowrap align-items-center
                     justify-content-center">
                        <div className='d-flex align-items-center justify-content-center col-12 col-lg'>
                            <img src={location} alt="location" className='me-2' />
                            <h6 className='me-3 text-center'>380 W 62nd Ave, Denver, CO</h6>
                        </div>

                        <a href="#" className="location btn-sm btn-outline-secondary border rounded mt-3 mt-lg-0">
                            CHANGE LOCATION
                        </a>
                    </div>
                    <div className="bottom-footer__right d-md-flex mt-5 mt-lg-0 justify-content-md-center">
                        <a href="#" className='text-colored d-block text-center mb-2 lg-mb-0'>
                            Terms & conditions
                        </a>
                        <a href="#" className='mx-3 text-colored d-block text-center lg-2 md-mb-0'>
                            Privacy policy
                        </a>
                        <a href="#" className='text-colored d-block text-center mb-2 lg-mb-0'>
                            Cookie policy
                        </a>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer