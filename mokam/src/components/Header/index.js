import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import mokamLogo from '../../assets/images/mokam-logo.svg'
import telIcon from '../../assets/images/tel-icon.svg'
import languageIcon from '../../assets/images/language-icon.svg'
import { getClassNames } from '../../functions'
import { StyledHeader } from './style'

function Header({ setLanguage, english, isRetailPage }) {
  return (
    <StyledHeader>
      <div className="width-wrapper">
        <div className="left-container">
          <Link to={'/retail'} className="logo">
            <img src={mokamLogo} alt="" />
          </Link>
          <div className="links">
            <Link to={'/retail'} className={getClassNames(isRetailPage && 'active')}>
              Retail
            </Link>
            <Link to={'/manufacturers'} className={getClassNames(!isRetailPage && 'active')}>
              Manufacturers
            </Link>
          </div>
        </div>
        <div className="right-container">
          <div className="hotline-tel">
            <img src={telIcon} alt="telephone" />
            <span>Hotline</span>
            <a href="tel:09610066525">09610066525</a>
          </div>
          <div
            className="language-wrapper"
            onClick={() => {
              setLanguage(!english)
            }}>
            <img src={languageIcon} alt="" />
            <span>{english ? 'En' : 'Fr'}</span>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}
Header.propTypes = {
  setLanguage: PropTypes.func,
  english: PropTypes.bool,
  isRetailPage: PropTypes.bool,
}

export default Header
