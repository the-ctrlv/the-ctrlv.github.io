import { Swiper, SwiperSlide } from 'swiper/react';

import { useMobileMode } from '../../shared';
import { StyledPhoneSwiper } from './styles';
import { mockReason2Content, mockReason4Content } from './constants';

function PhoneSwiper({ reason4 }) {

    const isMobileMode = useMobileMode();

    const contentToShow = reason4 ? mockReason4Content : mockReason2Content;

    return (
        <StyledPhoneSwiper className='d-flex justify-content-between align-items-end w-100 phone-slider
        position-relative'>
            {isMobileMode
                ?
                <Swiper slidesPerView={1}>
                    {contentToShow.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="phone" className='phone' />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
                :
                contentToShow.map((item, index) => (
                    <div key={index} className="col-4 d-flex justify-content-center">
                        <img src={item} alt="phone" className='phone' />
                    </div>
                ))
            }
            {!reason4 && <p className='position-absolute text-center w-100 tip'>
                Animation of the <span className='underline'>Swipe to Discover</span> Feature</p>}
        </StyledPhoneSwiper>
    )
}
export default PhoneSwiper;