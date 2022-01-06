import { PropTypes } from 'prop-types'
import { useRef } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import mainPic2 from '../../assets/images/main-pic2.jpg'
import mainPic2Tablet from '../../assets/images/main-pic2-tablet.jpg'
import mainPic2Mob from '../../assets/images/main-pic2-mobile.jpg'

import reasonPic1 from '../../assets/images/reason-pic1.png'
import reasonPic2 from '../../assets/images/reason-pic2.png'
import reasonPic3 from '../../assets/images/reason-pic3.png'

import brandPic1 from '../../assets/images/brand-pic1.png'
import brandPic2 from '../../assets/images/brand-pic2.png'
import brandPic3 from '../../assets/images/brand-pic3.png'
import brandPic4 from '../../assets/images/brand-pic4.png'
import brandPic5 from '../../assets/images/brand-pic5.png'
import brandPic6 from '../../assets/images/brand-pic6.png'

import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import StartBusiness from '../../components/StartBusiness'
import MokamForm from '../../components/MokamForm'
import { StyledMainSection } from '../style'
import MokamAwards from '../../components/MokamAwards'
import { StyledManufacturersPage } from './style'

function ManufacturersPage({ english, setLanguage }) {
  const scrolledElToStartBusiness = useRef()
  const scrolledElToContactUs = useRef()
  const scrollToContact = (evt) => {
    evt.preventDefault()
    const y = scrolledElToContactUs.current.getBoundingClientRect().top + window.pageYOffset - 140
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return (
    <StyledManufacturersPage>
      <Header english={english} setLanguage={setLanguage} />

      <StyledMainSection>
        <picture>
          <source media="(min-width:1025px)" srcSet={mainPic2} />
          <source media="(min-width:768px)" srcSet={mainPic2Tablet} />
          <img src={mainPic2Mob} alt="main" />
        </picture>

        <div className="width-wrapper">
          <div className="content-wrapper">
            <h1>{english ? EN.main2.title : FR.main2.title}</h1>
            <h3>{english ? EN.main2.subtitle : FR.main2.subtitle}</h3>
            <a
              href="#startBusiness"
              onClick={(evt) => {
                evt.preventDefault()
                const y = scrolledElToStartBusiness.current.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({ top: y, behavior: 'smooth' })
              }}
              className="mokam-button">
              {english ? EN.main2.button : FR.main2.button}
            </a>
          </div>
        </div>
      </StyledMainSection>

      <section className="help-business">
        <div className="width-wrapper">
          <h2>{english ? EN.helpBusiness.title : FR.helpBusiness.title}</h2>
          <ul className="reasons">
            <li>
              <img src={reasonPic1} alt="" />
              <h4>{english ? EN.helpBusiness.reasons.title1 : FR.helpBusiness.reasons.title1}</h4>
              <p>{english ? EN.helpBusiness.reasons.text1 : FR.helpBusiness.reasons.text1}</p>
            </li>
            <li>
              <img src={reasonPic2} alt="" />
              <h4>{english ? EN.helpBusiness.reasons.title2 : FR.helpBusiness.reasons.title2}</h4>
              <p>{english ? EN.helpBusiness.reasons.text2 : FR.helpBusiness.reasons.text2}</p>
            </li>
            <li>
              <img src={reasonPic3} alt="" />
              <h4>{english ? EN.helpBusiness.reasons.title3 : FR.helpBusiness.reasons.title3}</h4>
              <p>{english ? EN.helpBusiness.reasons.text3 : FR.helpBusiness.reasons.text3}</p>
            </li>
          </ul>
          <h2>{english ? EN.helpBusiness.bransTitle : FR.helpBusiness.bransTitle}</h2>
          <ul className="brands">
            <li>
              <img src={brandPic1} alt="" />
            </li>
            <li>
              <img src={brandPic2} alt="" />
            </li>
            <li>
              <img src={brandPic3} alt="" />
            </li>
            <li>
              <img src={brandPic4} alt="" />
            </li>
            <li>
              <img src={brandPic5} alt="" />
            </li>
            <li>
              <img src={brandPic6} alt="" />
            </li>
          </ul>
        </div>
      </section>
      <StartBusiness ref={scrolledElToStartBusiness} scrollToContact={scrollToContact} english={english} manufacturersPage />

      <MokamAwards english={english} />

      <MokamForm english={english} ref={scrolledElToContactUs} manufacturersForm url="manufacturers" />

      <Footer english={english} setLanguage={setLanguage} />
    </StyledManufacturersPage>
  )
}
ManufacturersPage.propTypes = {
  english: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default ManufacturersPage
