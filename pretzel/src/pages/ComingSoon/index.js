import { useState } from 'react';

import ComingSoonModal from './Modal';
import AIGLogo from '../../assets/images/aig-logo.svg';
import AllianzLogo from '../../assets/images/allianz-logo.svg';
import Footer from '../../containers/Footer';
import { benefitsList } from './constants';

import './style.scss';

function ComingSoon() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && <ComingSoonModal showModal={showModal} setShowModal={setShowModal} />}
            <section className="coming-soon-layout">

                <section className='coming-soon h-100 d-flex justify-content-center align-items-center'>
                    <div className='container-xl'>
                        <div className='coming-soon__content text-center'>
                            <span className='title fw-bold d-block mb-4'>Coming Soon!</span>
                            <span className='title fw-bold'>
                                Making life better <br />
                                through better protection.
                            </span>
                            <p className='sub-title mt-4 mb-2'>
                                Simple, straight forward protection plans for everything that matters.
                            </p>
                            <span className='benefits fw-bold d-block pb-3 mb-5'>
                                HOME. CAR. ELECTRONICS. PHONE.
                            </span>
                            <button onClick={() => { setShowModal(true) }} className='pretzel-button btn btn-primary'>
                                Get Notified
                            </button>
                        </div>
                    </div>
                </section>

                <section className='benefits position-relative'>
                    <div className='container-xl text-center'>
                        <span className='title fw-bold d-block mb-3'>
                            Awesome prices. Simple claims. <br /> Comprehensive coverage.
                        </span>
                        <span className='sub-title fw-bold d-block'>
                            Bundle your plans and save.
                        </span>
                        <ul className='d-flex flex-wrap flex-lg-nowrap justify-content-between'>
                            {benefitsList.map((benefit, index) => (
                                <li key={index} className='benefits__list text-center col-12 col-md-6 
                                col-lg-3 mb-5 d-flex flex-column justify-content-between'>
                                    <div>
                                        <div className='image-wrapper d-flex align-items-center'>
                                            <img src={benefit.logo} alt={benefit.title} className="d-block" />
                                        </div>
                                        <span className='fw-bold mt-4 mt-lg-2 d-block'>Your {benefit.title}</span>
                                        <p className='px-3'>{benefit.text}</p>
                                    </div>

                                    <div>
                                        <span className='fw-bold d-block my-3 my-lg-5' style={{ color: '#EE2E64' }}>
                                            Coming Soon!
                                        </span>
                                        <span>FROM $X/MO</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className='backed-by'>
                    <div className='container-xl text-center'>
                        <span className='title fw-bold d-block'>Backed by the best</span>
                        <p className='fw-bold px-4 px-xl-2'>Pretzel has great extended protection plans, backed by top financial institutions like Allianz, AIG, and A+ financial. </p>
                        <div className='logo-wrapper d-md-flex justify-content-center px-3'>
                            <img src={AllianzLogo} alt="Allianz Logo" className='mb-4 mb-md-0 me-md-3' />
                            <img src={AIGLogo} alt="AIG Logo" className='ms-md-3' />
                        </div>
                    </div>
                </section>

                <Footer />
            </section>
        </>

    );
}

export default ComingSoon