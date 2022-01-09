import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import thanksImg from '../../assets/images/thank-you.png'
import EN from '../../shared/language/en.js'
import FR from '../../shared/language/fr.js'
import { StyledThanksPage } from './style'

function ThanksPage({ english, setLanguage }) {
  return (
    <StyledThanksPage>
      <Header english={english} setLanguage={setLanguage} isThanksPage />
      <section className="thanks">
        <div className="width-wrapper">
          <img src={thanksImg} alt="thank you" />
          <h2>{english ? EN.thanks.title : FR.thanks.title}</h2>
          <h4 className="subtitle">{english ? EN.thanks.subtitle : FR.thanks.subtitle}</h4>
          <Link to={'/retail'} className="mokam-button">
            {english ? EN.thanks.button : FR.thanks.button}
          </Link>
        </div>
      </section>
      <Footer english={english} setLanguage={setLanguage} />
    </StyledThanksPage>
  )
}
ThanksPage.propTypes = {
  english: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default ThanksPage
