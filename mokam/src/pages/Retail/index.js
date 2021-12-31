import { PropTypes } from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { StyledRetailPage } from './style'

function RetailPage({ isLanguageEN, setLanguage }) {
  return (
    <StyledRetailPage>
      <Header isLanguageEN={isLanguageEN} setLanguage={setLanguage} />
      <Footer />
    </StyledRetailPage>
  )
}
RetailPage.propTypes = {
  isLanguageEN: PropTypes.bool,
  setLanguage: PropTypes.func,
}
export default RetailPage
