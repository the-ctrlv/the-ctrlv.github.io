import { PropTypes } from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { StyledManufacturersPage } from './style'

function ManufacturersPage({ english, setLanguage }) {
  return (
    <StyledManufacturersPage>
      <Header english={english} setLanguage={setLanguage} />
      <Footer />
    </StyledManufacturersPage>
  )
}
ManufacturersPage.propTypes = {
  english: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default ManufacturersPage
