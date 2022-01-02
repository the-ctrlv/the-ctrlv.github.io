import { PropTypes } from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import mainPic from '../../assets/images/main-pic.jpg'
import { StyledRetailPage } from './style'
import MokamContentSlider from './whyChooseMokam'

function RetailPage({ isLanguageEN, setLanguage }) {
  return (
    <StyledRetailPage>
      <Header isLanguageEN={isLanguageEN} setLanguage={setLanguage} isRetailPage />

      <section className="main">
        <img src={mainPic} alt="main" />
        <div className="width-wrapper">
          <div className="content-wrapper">
            <h1>One stop sourcing solution for retail shops</h1>
            <h3>Big Catalogue | Daily Delivery | Products on Credit</h3>
            <button type="button">Start Business</button>
          </div>
        </div>
      </section>

      <section className="why-mokam">
        <div className="width-wrapper">
          <h1>Why choose Mokam</h1>
          <MokamContentSlider />
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
