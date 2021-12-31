import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import mokamLogo from '../../assets/images/mokam-logo.svg'
import telIcon from '../../assets/images/mail-icon.svg'
import languageIcon from '../../assets/images/language-icon.svg'
import { StyledHeader } from './style'

function Header({ setLanguage, isLanguageEN }) {
  return (
    <StyledHeader>
      <div className="width-wrapper">
        <div className="left-container">
          <Link to={'/retail'}>
            <img src={mokamLogo} alt="" />
          </Link>
          <Link to={'/retail'}>Retail</Link>
          <Link to={'/manufacturers'}>Manufacturers</Link>
        </div>
        <div className="right-container">
          <div>
            <img src={telIcon} alt="telephone" />
            <span>Hotline</span>
            <a href="tel:09610066525">09610066525</a>
          </div>
          <div
            className="language"
            onClick={() => {
              setLanguage(!isLanguageEN)
            }}>
            <img src={languageIcon} alt="" />
            <span>{isLanguageEN ? 'En' : 'Fr'}</span>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}
Header.propTypes = {
  setLanguage: PropTypes.func,
  isLanguageEN: PropTypes.bool,
}

export default Header
