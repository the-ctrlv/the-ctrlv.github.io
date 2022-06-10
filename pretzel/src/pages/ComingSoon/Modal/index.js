import { useState } from 'react';
import { Modal } from 'bootstrap';

import ModalForm from './ModalForm';
import closeButton from '../../../assets/images/close-button.svg';
import okLogo from '../../../assets/images/OK.svg';
import { getClassNames } from '../../../shared/functions';

import './style.scss'

function ComingSoonModal({ showModal, setShowModal, className }) {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    console.log(isFormSubmitted)
    return (
        <div className={getClassNames('pretzel-modal d-flex justify-content-center align-items-center',
            showModal && 'show')}>
            <div className='core'>
                {!isFormSubmitted && (
                    <>
                        <span className='title fw-bold d-block mt-5 pt-5'>
                            We are coming soon!
                        </span>
                        <span className='sub-title fw-bold mt-3 mb-5 pb-4 d-block'>
                            Sign up to get notified
                        </span>

                        <ModalForm setIsFormSubmitted={setIsFormSubmitted} />
                    </>
                )}
                {isFormSubmitted && (
                    <>
                        <span className='title fw-bold d-block pb-5 mb-5'>Thank you <br />
                            for signing up!</span>
                        <img src={okLogo} alt="ok!" style={{ minHeight: '69px' }} />
                    </>
                )}

            </div>
            <img src={closeButton} className='pretzel-modal__close-button cursor-pointer'
                onClick={() => {
                    setShowModal(false)
                    setIsFormSubmitted(false)
                }} />
        </div>
    );
}

export default ComingSoonModal