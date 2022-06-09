import { useState } from 'react';

import ComingSoonModal from './Modal';
import AIGLogo from '../../assets/images/aig-logo.svg';
import AllianzLogo from '../../assets/images/allianz-logo.svg';
import Footer from '../../containers/Footer';

import './style.scss';

function ComingSoon() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {showModal && <ComingSoonModal showModal={showModal} setShowModal={setShowModal} />}
            <section className="coming-soon-layout">

                <section className='coming-soon'>
                    <div className='container-xl'>
                        <div className='coming-soon__content'>
                            <span className='title'>Coming Soon!</span>
                            <span className='title'>
                                Making life better
                                through better protection.
                            </span>
                            <p className='sub-title'>
                                Simple, straight forward protection plans for everything that matters.
                            </p>
                            <span className='benefits'>
                                HOME. CAR. ELECTRONICS. PHONE.
                            </span>
                            <button onClick={() => { setShowModal(true) }} className='btn btn-primary'>
                                Get Notified
                            </button>
                        </div>
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