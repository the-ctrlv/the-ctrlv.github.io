import { PropTypes } from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import mainPic2 from '../../assets/images/main-pic.jpg'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import { StyledManufacturersPage } from './style'

function ManufacturersPage({ english, setLanguage }) {
  return (
    <StyledManufacturersPage>
      <Header english={english} setLanguage={setLanguage} />
      <section className="main">
        <img src={mainPic2} alt="main" />
        <div className="width-wrapper">
          <div className="content-wrapper">
            <h1>{english ? EN.main.title : FR.main.title}</h1>
            <h3>{english ? EN.main.subtitle : FR.main.subtitle}</h3>
            <a
              href="#startBusiness"
              onClick={(evt) => {
                evt.preventDefault()
                // const y = scrolledElToStartBusiness.current.getBoundingClientRect().top + window.pageYOffset - 80
                // window.scrollTo({ top: y, behavior: 'smooth' })
              }}
              className="mokam-button">
              {english ? EN.main.button : FR.main.button}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </StyledManufacturersPage>
  )
}
ManufacturersPage.propTypes = {
  english: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default ManufacturersPage
