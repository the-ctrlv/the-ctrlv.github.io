import { useState } from 'react';

import ComingSoonModal from './Modal';
import AIGLogo from '../../assets/images/aig-logo.svg';
import AllianzLogo from '../../assets/images/allianz-logo.svg';
import Footer from '../../containers/Footer';
import { benefitsList, howItWorksList, noDramaList, pretzelMeansList } from './constants';

import './style.scss';

function ComingSoon() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && <ComingSoonModal showModal={showModal} setShowModal={setShowModal} />}

            <section className='hero h-100 d-flex justify-content-center align-items-center'>
                <div className='container-xl'>
                    <div className='hero__content text-center'>
                        <span className='hero_top-title title title fw-bold d-block'>Coming Soon!</span>
                        <h1 className='hero_title title fw-bold'>
                            Making life better <br />
                            through better protection.
                        </h1>
                        <p className='mt-4 mb-2'>
                            Simple, straight forward protection plans for everything that matters.
                        </p>
                        <span className='fw-bold d-block pb-3 mb-5'>
                            HOME. CAR. ELECTRONICS. PHONE.
                        </span>
                        <button onClick={() => { setShowModal(true) }} className='pretzel-button btn btn-primary'>
                            Get Notified
                        </button>
                    </div>
                </div>
            </section>

            <div className='section-group position-relative'>
                <section className='benefits position-relative'>
                    <div className='container-xl text-center'>
                        <span className='title fw-bold d-block mb-3'>
                            Awesome prices. Simple claims. <br /> Comprehensive coverage.
                        </span>
                        <span className='sub-title fw-bold d-block'>
                            Bundle your plans and save.
                        </span>
                        <ul className='d-flex flex-wrap flex-lg-nowrap justify-content-between px-lg-5'>
                            {benefitsList.map((benefit, index) => (
                                <li key={index} className='benefits__list text-center col-12 col-md-6 
                                col-lg-3 mb-5 d-flex flex-column justify-content-between'>
                                    <div>
                                        <div className='image-wrapper d-flex align-items-center'>
                                            <img src={benefit.logo} alt={benefit.title} className="d-block" />
                                        </div>
                                        <span className='fw-bold mt-4 mt-lg-2 d-block list-title'>Your {benefit.title}</span>
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

                <section className='how-it-works pt-3'>
                    <div className='container-xl text-center'>
                        <span className='title fw-bold d-block mb-3'>
                            Here's how it will work
                        </span>
                        <p className='sub-title fw-bold d-block col-lg-10 px-md-3 mb-5'>
                            We run protection plans the way they should be run – as a service designed to save you money and make your life easier. You pay a low, flat monthly fee, and when something happens that’s covered, we foot the bill or make sure you get paid easily and quickly.
                        </p>
                        <ul className='d-flex flex-wrap flex-lg-nowrap justify-content-between px-lg-5'>
                            {howItWorksList.map((howItWorks, index) => (
                                <li key={index} className='how-it-works__list text-center col-12 col-md-6 
                                col-lg-3 mb-5 d-flex flex-column justify-content-between'>
                                    <div className='image-wrapper d-flex align-items-center'>
                                        <img src={howItWorks.logo} alt={howItWorks.title} className="d-block" />
                                    </div>
                                    <p className='px-3 fw-bold mt-3 list-title'>{howItWorks.text}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                </section>
            </div>


            <section className='no-drama position-relative colored'>
                <div className='container-xl text-center'>
                    <span className='title fw-bold d-block mb-3'>
                        No more drama
                    </span>
                    <p className='sub-title fw-bold d-block col-lg-10'>
                        We know what you’ve heard about extended warranties, but that’s not us. We’re here because, frankly?
                        Extended warranties are broken, and we’re here to fix them. Simple as that.
                    </p>
                    <span className='fw-bold d-block list-caption'>That means…</span>
                    <ul className='d-flex flex-wrap flex-lg-nowrap justify-content-between'>
                        {noDramaList.map((noDrama, index) => (
                            <li key={index} className='no-drama__list text-center col-12 col-md-6
                                    col-lg-3 mb-5 position-relative'>
                                <div className='image-wrapper d-flex align-items-center'>
                                    <img src={noDrama.logo} alt={noDrama.title} className="d-block" />
                                </div>
                                <p className='px-3 fw-bold mt-5 list-title'>{noDrama.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='w-100 text-center'>
                        <button onClick={() => { setShowModal(true) }} className='pretzel-button btn btn-primary'>
                            Get Notified
                        </button>
                    </div>
                </div>
            </section>

            <section className='pretzel-means'>
                <div className='container-xl text-center'>
                    <span className='title fw-bold d-block mb-3'>
                        Pretzel means coverage with a heart
                    </span>
                    <span className='fw-bold d-block my-3'>
                        (we’re a soft, warm pretzel)
                    </span>
                    <p className='sub-title fw-bold d-block px-3 px-lg-5'>
                        When we say our mission is making life better through better protection,
                        we mean making the world better too. That’s why we make regular donations to charities chosen by Pretzel customers like you.
                    </p>
                    <ul className='d-flex flex-wrap flex-lg-nowrap justify-content-between'>
                        {pretzelMeansList.map((pretzelMeans, index) => (
                            <li key={index} className='pretzel-means__list text-center d-flex justify-content-center col-12 col-md-2'>
                                <div className='image-wrapper h-100 d-flex align-items-center'>
                                    <img src={pretzelMeans} alt={pretzelMeans} className="d-block" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            <section className='backed-by colored'>
                <div className='backed-by_content container-xl text-center'>
                    <span className='title mb-3 fw-bold d-block'>Backed by the best</span>
                    <p className='sub-title fw-bold px-4 px-xl-2 col-lg-10'>Pretzel has great extended protection plans, backed by top financial institutions like Allianz, AIG, and A+ financial. </p>
                    <div className='logo-wrapper d-md-flex justify-content-center px-3'>
                        <img src={AllianzLogo} alt="Allianz Logo" className='mb-4 mb-md-0 me-md-5' />
                        <img src={AIGLogo} alt="AIG Logo" className='ms-md-5' />
                    </div>
                </div>
            </section>

            <Footer />
        </>

    );
}

export default ComingSoon