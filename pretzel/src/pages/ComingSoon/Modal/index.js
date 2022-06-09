import { Modal } from 'bootstrap';

import closeButton from '../../../assets/images/close-button.svg';

import './style.scss'

function ComingSoonModal({ showModal, setShowModal }) {

    return (
        <div className='modal d-flex justify-content-center align-items-center'>
            <div className='core'>
                <span className='title'>
                    We are coming soon!
                </span>
                <span className='sub-title'>
                    Sign up to get notified
                </span>
                <form>

                </form>
            </div>
            <img src={closeButton} className='modal__close-button cursor-pointer'
                onClick={() => setShowModal(false)} />
        </div>
    );
}

export default ComingSoonModal