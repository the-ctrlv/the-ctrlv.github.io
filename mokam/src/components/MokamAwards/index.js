import propTypes from 'prop-types'
import Slider from 'react-slick'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import awardsPic1 from '../../assets/images/awards-pic1.png'
import awardsPic2 from '../../assets/images/awards-pic2.png'
import awardsPic3 from '../../assets/images/awards-pic3.png'
import { StyledAwards } from './style'

function MokamAwards({ english }) {
  var settings = {
    unslick: true,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          unslick: false,
          dotsClass: 'dots-container',
          slidesToShow: 1,
          speed: 500,
          infinite: false,
          buttons: false,
          autoplay: true,
          dots: true,
          autoplaySpeed: 5000,
          arrows: false,
        },
      },
    ],
  }
  return (
    <StyledAwards>
      <div className="width-wrapper">
        <h2>{english ? EN.awards.sectionTitle : FR.awards.sectionTitle}</h2>
        <Slider {...settings}>
          <li>
            <img src={awardsPic1} alt="" />
            <h4>{english ? EN.awards.title1 : FR.awards.title1}</h4>
            <p>{english ? EN.awards.text1 : FR.awards.text1}</p>
          </li>
          <li>
            <img src={awardsPic2} alt="" />
            <h4>{english ? EN.awards.title2 : FR.awards.title2}</h4>
            <p>{english ? EN.awards.text2 : FR.awards.text2}</p>
          </li>
          <li>
            <img src={awardsPic3} alt="" />
            <h4>{english ? EN.awards.title3 : FR.awards.title3}</h4>
            <p>{english ? EN.awards.text3 : FR.awards.text3}</p>
          </li>
        </Slider>
      </div>
    </StyledAwards>
  )
}
MokamAwards.propTypes = {
  english: propTypes.bool,
}
export default MokamAwards
