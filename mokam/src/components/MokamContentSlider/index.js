import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'
import mediaSliderImage1 from '../../assets/images/media-slider-image1.png'
import mediaSliderImage2 from '../../assets/images/media-slider-image2.png'
import mediaSliderImage3 from '../../assets/images/media-slider-image3.png'
import mediaSliderImage4 from '../../assets/images/media-slider-image4.png'
import { ReactComponent as PointIcon } from '../../assets/images/point-icon.svg'
import { getClassNames, useWindowResize } from '../../shared/functions'

import { StyledContentSlider } from './style'

function MokamContentSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef()
  const [mobileView, setMobileView] = useState(null)
  const { width } = useWindowResize()
  useEffect(() => {
    setMobileView(width <= 1024)
  }, [width])

  var settings = {
    speed: 500,
    infinite: true,
    buttons: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    // eslint-disable-next-line arrow-parens
    afterChange: (current) => setCurrentSlide(current),
  }

  const handleOnClick = index => {
    sliderRef.current.slickGoTo(index - 1)
  }
  const { t } = useTranslation()

  return (
    <StyledContentSlider>
      {!mobileView && (
        <Slider {...settings} ref={sliderRef} className="media-container">
          <img src={mediaSliderImage1} alt="" />
          <img src={mediaSliderImage2} alt="" />
          <img src={mediaSliderImage3} alt="" />
          <img src={mediaSliderImage4} alt="" />
        </Slider>
      )}
      <div className="text-container">
        <div className="content-item active" onClick={() => handleOnClick(1)}>
          {mobileView ? <img src={mediaSliderImage1} alt="" /> : <PointIcon />}
          <h3>{t('whyChooseMokam.sliderTitle1')}</h3>
          <p>{t('whyChooseMokam.sliderSubtitle1')}</p>
        </div>
        <div className={getClassNames('content-item', 1 <= currentSlide && 'active')} onClick={() => handleOnClick(2)}>
          {mobileView ? <img src={mediaSliderImage2} alt="" /> : <PointIcon />}
          <h3>{t('whyChooseMokam.sliderTitle2')}</h3>
          <p>{t('whyChooseMokam.sliderSubtitle2')}</p>
        </div>
        <div className={getClassNames('content-item', 2 <= currentSlide && 'active')} onClick={() => handleOnClick(3)}>
          {mobileView ? <img src={mediaSliderImage3} alt="" /> : <PointIcon />}
          <h3>{t('whyChooseMokam.sliderTitle3')}</h3>
          <p>{t('whyChooseMokam.sliderSubtitle3')}</p>
        </div>
        <div className={getClassNames('content-item', 3 <= currentSlide && 'active')} onClick={() => handleOnClick(4)}>
          {mobileView ? <img src={mediaSliderImage4} alt="" /> : <PointIcon />}
          <h3>{t('whyChooseMokam.sliderTitle4')}</h3>
          <p>{t('whyChooseMokam.sliderSubtitle4')}</p>
        </div>
      </div>
    </StyledContentSlider>
  )
}
export default MokamContentSlider
