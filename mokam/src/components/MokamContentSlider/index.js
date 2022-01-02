import { useRef, useState } from 'react'
import Slider from 'react-slick'
import mediaSliderImage1 from '../../assets/images/media-slider-image1.png'
import mediaSliderImage2 from '../../assets/images/media-slider-image2.png'
import mediaSliderImage3 from '../../assets/images/media-slider-image3.png'
import mediaSliderImage4 from '../../assets/images/media-slider-image4.png'
import { ReactComponent as PointIcon } from '../../assets/images/point-icon.svg'
import { getClassNames } from '../../functions'
import { StyledContentSlider } from './style'

function MokamContentSlider() {
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
  console.log(currentSlide)

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
          <h3>One stop market</h3>
          <p>Get all products from Mokam , no need to visit markets or talk to hundreds of salespeople</p>
        </div>
        <div className={getClassNames('content-item', 1 <= currentSlide && 'active')} onClick={() => handleOnClick(2)}>
          <PointIcon />
          <h3>No minimum order quantity</h3>
          <p>No need to place bulk orders, only order what you need, even if it is 1 product</p>
        </div>
        <div className={getClassNames('content-item', 2 <= currentSlide && 'active')} onClick={() => handleOnClick(3)}>
          <PointIcon />
          <h3>Order today, delivery tomorrow</h3>
          <p>Get everything delivered right to your doorstep - we offer next day delivery across the country</p>
        </div>
        <div className={getClassNames('content-item', 3 <= currentSlide && 'active')} onClick={() => handleOnClick(4)}>
          <PointIcon />
          <h3>Buy now pay later</h3>
          <p>Do business with us, with a good record, you can buy products on credit</p>
        </div>
      </div>
    </StyledContentSlider>
  )
}

export default MokamContentSlider
