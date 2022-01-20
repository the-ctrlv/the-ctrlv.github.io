import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PropTypes } from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import thanksImg from '../../assets/images/thank-you.png'
import { StyledThanksPage } from './style'

function ThanksPage({ currLang, setCurrLang }) {
  const { t } = useTranslation()
  return (
    <StyledThanksPage>
      <Header isThanksPage currLang={currLang} setCurrLang={setCurrLang} />
      <section className="thanks">
        <div className="width-wrapper">
          <img src={thanksImg} alt="thank you" />
          <h2>{t('thanks.title')}</h2>
          <h4 className="subtitle">{t('thanks.subtitle')}</h4>
          <Link to={`/retail/${currLang}`} className="mokam-button">
            {t('thanks.button')}
          </Link>
        </div>
      </section>
      <Footer />
    </StyledThanksPage>
  )
}
ThanksPage.propTypes = {
  currLang: PropTypes.string,
  setCurrLang: PropTypes.func,
}
export default ThanksPage
