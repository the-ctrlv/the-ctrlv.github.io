import propTypes from 'prop-types'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import mediaSliderImage1 from '../../assets/images/media-slider-image1.png'
import mediaSliderImage2 from '../../assets/images/media-slider-image2.png'
import mediaSliderImage3 from '../../assets/images/media-slider-image3.png'
import mediaSliderImage4 from '../../assets/images/media-slider-image4.png'
import { ReactComponent as PointIcon } from '../../assets/images/point-icon.svg'
import { getClassNames } from '../../functions'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import { StyledContentSlider } from './style'

function MokamContentSlider({ english }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef()
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

  // eslint-disable-next-line prettier/prettier
  const handleOnClick = index => {
    sliderRef.current.slickGoTo(index - 1)
  }

  return (
    <StyledContentSlider>
      <Slider {...settings} ref={sliderRef} className="media-container">
        <img src={mediaSliderImage1} alt="" />
        <img src={mediaSliderImage2} alt="" />
        <img src={mediaSliderImage3} alt="" />
        <img src={mediaSliderImage4} alt="" />
      </Slider>
      <div className="text-container">
        <div className="content-item active" onClick={() => handleOnClick(1)}>
          <PointIcon />
          <h3>{english ? EN.whyChooseMokam.sliderTitle1 : FR.whyChooseMokam.sliderTitle1}</h3>
          <p>{english ? EN.whyChooseMokam.sliderTitle1 : FR.whyChooseMokam.sliderSubtitle1}</p>
        </div>
        <div className={getClassNames('content-item', 1 <= currentSlide && 'active')} onClick={() => handleOnClick(2)}>
          <PointIcon />
          <h3>{english ? EN.whyChooseMokam.sliderTitle2 : FR.whyChooseMokam.sliderTitle2}</h3>
          <p>{english ? EN.whyChooseMokam.sliderTitle2 : FR.whyChooseMokam.sliderSubtitle2}</p>
        </div>
        <div className={getClassNames('content-item', 2 <= currentSlide && 'active')} onClick={() => handleOnClick(3)}>
          <PointIcon />
          <h3>{english ? EN.whyChooseMokam.sliderTitle3 : FR.whyChooseMokam.sliderTitle3}</h3>
          <p>{english ? EN.whyChooseMokam.sliderTitle3 : FR.whyChooseMokam.sliderSubtitle3}</p>
        </div>
        <div className={getClassNames('content-item', 3 <= currentSlide && 'active')} onClick={() => handleOnClick(4)}>
          <PointIcon />
          <h3>{english ? EN.whyChooseMokam.sliderTitle4 : FR.whyChooseMokam.sliderTitle4}</h3>
          <p>{english ? EN.whyChooseMokam.sliderTitle4 : FR.whyChooseMokam.sliderSubtitle4}</p>
        </div>
      </div>
    </StyledContentSlider>
  )
}
MokamContentSlider.propTypes = {
  english: propTypes.bool,
}

export default MokamContentSlider
