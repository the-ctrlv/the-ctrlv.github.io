import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'
import awardsPic1 from '../../assets/images/awards-pic1.png'
import awardsPic2 from '../../assets/images/awards-pic2.png'
import awardsPic3 from '../../assets/images/awards-pic3.png'
import { StyledAwards } from './style'

function MokamAwards() {
  const { t } = useTranslation()
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
        <h2>{t('awards.sectionTitle')}</h2>
        <Slider {...settings}>
          <li>
            <img src={awardsPic1} alt="" />
            <h4>{t('awards.title1')}</h4>
            <p>{t('awards.text1')}</p>
          </li>
          <li>
            <img src={awardsPic2} alt="" />
            <h4>{t('awards.title2')}</h4>
            <p>{t('awards.text2')}</p>
          </li>
          <li>
            <img src={awardsPic3} alt="" />
            <h4>{t('awards.title3')}</h4>
            <p>{t('awards.text3')}</p>
          </li>
        </Slider>
      </div>
    </StyledAwards>
  )
}
export default MokamAwards
