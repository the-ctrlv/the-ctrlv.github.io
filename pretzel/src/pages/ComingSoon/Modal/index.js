import { useState } from 'react';
import { Modal } from 'bootstrap';

import ModalForm from './ModalForm';
import closeButton from '../../../assets/images/close-button.svg';
import okLogo from '../../../assets/images/OK.svg';

import './style.scss'

function ComingSoonModal({ showModal, setShowModal }) {
    const [isFormSubmitted, SetIsFormSubmitted] = useState(false)

    return (
        <div className='pretzel-modal d-flex justify-content-center align-items-center'>
            <div className='core'>
                {!isFormSubmitted && (
                    <>
                        <span className='title fw-bold d-block'>
                            We are coming soon!
                        </span>
                        <span className='sub-title fw-bold mt-3 mb-5 pb-4 d-block'>
                            Sign up to get notified
                        </span>

                        <ModalForm SetIsFormSubmitted={SetIsFormSubmitted} />
                    </>
                )}
                {isFormSubmitted && (
                    <>
                        <span className='title fw-bold d-block pb-5 mb-5'>Thank you <br />
                            for signing up!</span>
                        <img src={okLogo} alt="ok!" />
                    </>
                )}

            </div>
            <img src={closeButton} className='pretzel-modal__close-button cursor-pointer'
                onClick={() => setShowModal(false)} />
        </div>
    );
}

export default ComingSoonModal