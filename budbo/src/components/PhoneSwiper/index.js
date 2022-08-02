// import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getClassNames, useMobileMode } from '../../shared';
import { StyledPhoneSwiper } from './styles';
import { mockReason2Content, mockReason4Content } from './constants';

function PhoneSwiper({ reason4, description, switchMobileMode, discover }) {

    const isMobileDevice = useMobileMode();
    const isForMobile = discover ? switchMobileMode : isMobileDevice
    const contentToShow = reason4 ? mockReason4Content : mockReason2Content;
    return (
        <StyledPhoneSwiper className='d-flex justify-content-between align-items-end w-100 phone-slider
        position-relative'>
            {isForMobile
                ?
                <div className={getClassNames('w-100 position-relative', switchMobileMode ? 'desktop-wrapper' : '')}>
                    <Swiper slidesPerView={1}>
                        {contentToShow.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} alt="phone" className='phone w-100' />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
                :
                contentToShow.map((item, index) => (
                    <div key={index} className="col-4 d-flex justify-content-center my-4 my-md-0">
                        <img src={item} alt="phone" className='phone' />
                    </div>
                ))
            }
            {description && <p className='position-absolute text-center w-100 tip'>
                Animation of the <span className='underline'>Swipe to Discover</span> Feature</p>}
        </StyledPhoneSwiper>
    )
}
export default PhoneSwiper;