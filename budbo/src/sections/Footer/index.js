import appStore from '../../assets/images/app-store.svg';
import googlePlay from '../../assets/images/google-play.svg';
import logo from '../../assets/images/logo.svg';
import { mockFooterLinks, mockFooterSocialLinks } from './mockFooterLinks';
import { StyledFooter } from './style';

function Footer() {

    return (
        <StyledFooter>
            <div className="container">
                <div className="top-footer d-flex justify-content-between">
                    <div className="top-footer__left d-flex align-items-center">
                        <a href="#" className='me-3'>
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="exchange rounded border d-flex">
                            <p className='me-4'>1 BUBO = 1.4567 USD</p>
                            <span>24.12   +0.5%</span>
                        </div>
                    </div>
                    <div className="top-footer__right d-flex align-items-center">
                        <p className='me-3'>
                            Get plugged in with the Budbo app!
                        </p>
                        <a href="#">
                            <img src={appStore} alt="App Store" />
                        </a>
                        <a href="#" className='ms-2'>
                            <img src={googlePlay} alt="Google Play" />
                        </a>
                    </div>

                </div>
                <div className="footer-content">
                    <ul className='d-flex justify-content-between py-3'>
                        {mockFooterLinks.map((item, index) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.link}>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li>
                            <h3>Subscribe to the free newsletter</h3>
                            <p>Sign up and get 20% discount on your first order.</p>
                            <div className='d-flex'>
                                <input type="text" placeholder="Your email address"
                                    className='me-3 rounded flex-grow-1' />
                                <button className='btn btn-primary border-0'>Sign-up</button>
                            </div>
                            <div className='social-media d-flex'>
                                {mockFooterSocialLinks.map((item, index) => (
                                    <a key={index} href={item.link}>
                                        <img src={item.icon} alt={item.name} />
                                    </a>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bottom-footer w-100 d-flex justify-content-between py-5">
                    <div className="bottom-footer__left d-flex">
                        <span className='location' />
                        <h6>380 W 62nd Ave, Denver, CO</h6>
                        <button className="btn-sm btn-outline-secondary">
                            Change location
                        </button>
                    </div>
                    <div className="bottom-footer__right d-flex">
                        <a href="#">
                            Terms & conditions
                        </a>
                        <a href="#" className="mx-3">
                            Privacy policy
                        </a>
                        <a href="#">
                            Cookie policy
                        </a>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer