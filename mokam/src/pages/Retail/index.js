import { PropTypes } from 'prop-types'
import { useRef } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import mainPic from '../../assets/images/main-pic.jpg'

import MokamContentSlider from '../../components/MokamContentSlider'
import MokamForm from '../../components/MokamForm'
import downloadAppLogo from '../../assets/images/download-logo.png'
import MokamFeedbackSlider from '../../components/MokamFeedbackSlider'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import StartBusiness from '../../components/StartBusiness'
import { StyledRetailPage } from './style'

function RetailPage({ english, setLanguage }) {
  const scrolledElToStartBusiness = useRef()
  const scrolledElToContactUs = useRef()
  const scrollToContact = (evt) => {
    evt.preventDefault()
    const y = scrolledElToContactUs.current.getBoundingClientRect().top + window.pageYOffset - 140
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <StyledRetailPage>
      <Header english={english} setLanguage={setLanguage} isRetailPage />

      <section className="main">
        <img src={mainPic} alt="main" />
        <div className="width-wrapper">
          <div className="content-wrapper">
            <h1>{english ? EN.main.title : FR.main.title}</h1>
            <h3>{english ? EN.main.subtitle : FR.main.subtitle}</h3>
            <a
              href="#startBusiness"
              onClick={(evt) => {
                evt.preventDefault()
                const y = scrolledElToStartBusiness.current.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({ top: y, behavior: 'smooth' })
              }}
              className="mokam-button">
              {english ? EN.main.button : FR.main.button}
            </a>
          </div>
        </div>
      </section>

      <section className="why-mokam">
        <div className="width-wrapper">
          <h2>{english ? EN.whyChooseMokam.title : FR.whyChooseMokam.title}</h2>
          <MokamContentSlider english={english} scrollToContact={scrollToContact} />
        </div>
      </section>

      <StartBusiness ref={scrolledElToStartBusiness} scrollToContact={scrollToContact} english={english} />

      <section className="feedback">
        <div className="width-wrapper">
          <h2>{english ? EN.feedback.title : FR.feedback.title}</h2>
          <h4 className="subtitle">{english ? EN.feedback.subtitle : FR.feedback.subtitle}</h4>
          <MokamFeedbackSlider english={english} />
        </div>
      </section>

      <MokamForm english={english} ref={scrolledElToContactUs} />

      <section className="get-the-app">
        <div className="width-wrapper">
          <div>
            <h2>{english ? EN.getTheApp.title : FR.getTheApp.title}</h2>
            <p>{english ? EN.getTheApp.subtitle : FR.getTheApp.subtitle}</p>
          </div>
          <a href="/some">
            <img src={downloadAppLogo} alt="" />
          </a>
        </div>
      </section>
      <Footer english={english} />
    </StyledRetailPage>
  )
}
RetailPage.propTypes = {
  english: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default RetailPage
