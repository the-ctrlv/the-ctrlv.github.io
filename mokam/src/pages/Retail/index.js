import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { PropTypes } from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import mainPic from '../../assets/images/main-pic.jpg'
import mainPicTablet from '../../assets/images/main-pic-tablet.jpg'
import mainPicMob from '../../assets/images/main-pic-mobile.jpg'

import MokamContentSlider from '../../components/MokamContentSlider'
import MokamForm from '../../components/MokamForm'
import downloadAppLogo from '../../assets/images/download-logo.png'
import MokamFeedbackSlider from '../../components/MokamFeedbackSlider'
import StartBusiness from '../../components/StartBusiness'
import { StyledMainSection } from '../style'
import { StyledRetailPage } from './style'

function RetailPage({ currLang, setCurrLang }) {
  const scrolledElToStartBusiness = useRef()
  const scrolledElToContactUs = useRef()
  const { t } = useTranslation()
  const scrollToContact = (evt) => {
    evt.preventDefault()
    const y = scrolledElToContactUs.current.getBoundingClientRect().top + window.pageYOffset - 140
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <StyledRetailPage>
      <Header isRetailPage currLang={currLang} setCurrLang={setCurrLang} />

      <StyledMainSection>
        <picture>
          <source media="(min-width:1025px)" srcSet={mainPic} />
          <source media="(min-width:768px)" srcSet={mainPicTablet} />
          <img src={mainPicMob} alt="main" />
        </picture>

        <div className="width-wrapper">
          <div className="content-wrapper">
            <h1>{t('main.title')}</h1>
            <h3>{t('main.subtitle')}</h3>
            <a
              href="#startBusiness"
              onClick={(evt) => {
                evt.preventDefault()
                const y = scrolledElToStartBusiness.current.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({ top: y, behavior: 'smooth' })
              }}
              className="mokam-button">
              {t('main.button')}
            </a>
          </div>
        </div>
      </StyledMainSection>

      <section className="why-mokam">
        <div className="width-wrapper">
          <h2>{t('whyChooseMokam.title')}</h2>
          <MokamContentSlider scrollToContact={scrollToContact} />
        </div>
      </section>

      <StartBusiness ref={scrolledElToStartBusiness} scrollToContact={scrollToContact} />

      <section className="feedback">
        <div className="width-wrapper">
          <h2>{t('feedback.title')}</h2>
          <h4 className="subtitle">{t('feedback.subtitle')}</h4>
          <MokamFeedbackSlider />
        </div>
      </section>

      <MokamForm ref={scrolledElToContactUs} currLang={currLang} url="retail" />

      <section className="get-the-app">
        <div className="width-wrapper">
          <div>
            <h2>{t('getTheApp.title')}</h2>
            <p>{t('getTheApp.subtitle')}</p>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.mokam.app&hl=en_IN&gl=US">
            <img src={downloadAppLogo} alt="" />
          </a>
        </div>
      </section>
      <Footer />
    </StyledRetailPage>
  )
}

RetailPage.propTypes = {
  currLang: PropTypes.string,
  setCurrLang: PropTypes.func,
}
export default RetailPage
