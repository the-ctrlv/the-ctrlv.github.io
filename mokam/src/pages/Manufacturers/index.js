import { PropTypes } from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { StyledManufacturersPage } from './style'

function ManufacturersPage({ isLanguageEN, setLanguage }) {
  return (
    <StyledManufacturersPage>
      <Header isLanguageEN={isLanguageEN} setLanguage={setLanguage} />
      <Footer />
    </StyledManufacturersPage>
  )
}
ManufacturersPage.propTypes = {
  isLanguageEN: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default ManufacturersPage
