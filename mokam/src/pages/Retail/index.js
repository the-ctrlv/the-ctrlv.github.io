import { PropTypes } from 'prop-types'
import { useRef } from 'react'
import Footer from '../../components/Footer'
import telIcon from '../../assets/images/tel-icon.svg'
import Header from '../../components/Header'
import mainPic from '../../assets/images/main-pic.jpg'
import heroPic from '../../assets/images/hero-pic.jpg'
import MokamContentSlider from '../../components/MokamContentSlider'
import MokamForm from '../../components/MokamForm'
import downloadAppLogo from '../../assets/images/download-logo.png'
import MokamFeedbackSlider from '../../components/MokamFeedbackSlider'
import { StyledRetailPage } from './style'

function RetailPage({ isLanguageEN, setLanguage }) {
  const scrolledElToStartBusiness = useRef()
  const scrolledElToContactUs = useRef()
  return (
    <StyledRetailPage>
      <Header isLanguageEN={isLanguageEN} setLanguage={setLanguage} isRetailPage />

      <section className="main">
        <img src={mainPic} alt="main" />
        <div className="width-wrapper">
          <div className="content-wrapper">
            <h1>One stop sourcing solution for retail shops</h1>
            <h3>Big Catalogue | Daily Delivery | Products on Credit</h3>
            <a
              href="#startBusiness"
              onClick={(evt) => {
                evt.preventDefault()
                scrolledElToStartBusiness.current.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mokam-button">
              Start Business
            </a>
          </div>
        </div>
      </section>

      <section className="why-mokam">
        <div className="width-wrapper">
          <h2>Why choose Mokam</h2>
          <MokamContentSlider />
        </div>
      </section>

      <section className="start-business" id="startBusiness" ref={scrolledElToStartBusiness}>
        <div className="width-wrapper">
          <div className="text-container">
            <h2>Start your business in one simple step</h2>
            <p>Give us a call at </p>
            <a href="/some">
              <img src={telIcon} alt="tel" />
              <span>09610066525</span>
            </a>
            <p>or, drop us a line</p>
            <button
              type="button"
              className="mokam-button"
              onClick={(evt) => {
                evt.preventDefault()
                scrolledElToContactUs.current.scrollIntoView({ behavior: 'smooth' })
              }}>
              Contact now
            </button>
          </div>
        </div>
        <img src={heroPic} alt="hero" />
      </section>

      <section className="feedback">
        <div className="width-wrapper">
          <h2>Empowering small retailers across Bangladesh</h2>
          <h4 className="subtitle">Hear what our partners have to say about their experience with Mokam</h4>
          <MokamFeedbackSlider />
        </div>
      </section>

      <section className="get-in-touch" ref={scrolledElToContactUs}>
        <div className="width-wrapper">
          <h2>Get in touch with us</h2>
          <h4 className="subtitle">Drop us your contact details and we will get back to you</h4>
          <MokamForm />
        </div>
      </section>

      <section className="get-the-app">
        <div className="width-wrapper">
          <div>
            <h2>Download Mokam app</h2>
            <p>Let's grow together</p>
          </div>
          <a href="/some">
            <img src={downloadAppLogo} alt="" />
          </a>
        </div>
      </section>
      <Footer />
    </StyledRetailPage>
  )
}
RetailPage.propTypes = {
  isLanguageEN: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default RetailPage
