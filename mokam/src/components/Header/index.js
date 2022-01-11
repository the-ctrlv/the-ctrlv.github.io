import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'
import mokamLogo from '../../assets/images/mokam-logo.svg'
import mokamLogoTranslated from '../../assets/images/mokam-logo-translated.svg'
import telIcon from '../../assets/images/tel-icon.svg'
import languageIcon from '../../assets/images/language-icon.svg'
import { getClassNames, useWindowResize } from '../../shared/functions'
import EN from '../../shared/language/en.js'
import FR from '../../shared/language/fr.js'
import { StyledHeader } from './style'

function Header({ setLanguage, english, isRetailPage, isThanksPage }) {
  const [open, setOpen] = useState(false)
  const [mobileView, setMobileView] = useState(null)
  const { width } = useWindowResize()

  useEffect(() => {
    setMobileView(width <= 1024)
  }, [width])

  const switchMenu = () => {
    setOpen(!open)
  }

  return (
    <StyledHeader>
      <div className="width-wrapper">
        <div className="left-container">
          <Link to={'/retail'} className="logo">
            <img src={english ? mokamLogo : mokamLogoTranslated} alt="" />
          </Link>
          <div className="links">
            <Link to={'/retail'} className={getClassNames(isRetailPage & !isThanksPage && 'active')}>
              {english ? EN.header.link1 : FR.header.link1}
            </Link>
            <Link to={'/manufacturers'} className={getClassNames(!isRetailPage & !isThanksPage && 'active')}>
              {english ? EN.header.link2 : FR.header.link2}
            </Link>
          </div>
        </div>
        <div className="right-container">
          <a href="tel:09610066525" className="hotline-tel">
            <img src={telIcon} alt="telephone" />
            <span>{english ? EN.header.telTitle : FR.header.telTitle}</span>
            <p>{english ? EN.header.telNumber : FR.header.telNumber}</p>
          </a>
          <div className={getClassNames('mobile-menu', open && 'opened')}>
            <div className="mobile-links">
              <Link to={'/retail'} className={getClassNames(isRetailPage & !isThanksPage && 'active')} onClick={switchMenu}>
                Retail
              </Link>
              <Link to={'/manufacturers'} className={getClassNames(!isRetailPage & !isThanksPage && 'active')} onClick={switchMenu}>
                Manufacturers
              </Link>
            </div>
            <div
              className="language-wrapper"
              onClick={() => {
                setLanguage(!english)
              }}>
              <img src={languageIcon} alt="" />
              {mobileView && <span className="mob-lang">Language: </span>}
              <span>{english ? (mobileView ? EN.header.languageMob : EN.header.language) : FR.header.language}</span>
            </div>
          </div>
          {mobileView && (
            <nav className={getClassNames('hamburger-button', open && 'opened')} onClick={switchMenu}>
              <span className="hamburger-icon hamburger-icon--top" />
              <span className="hamburger-icon hamburger-icon--middle" />
              <span className="hamburger-icon hamburger-icon--bottom" />
            </nav>
          )}
        </div>
      </div>
    </StyledHeader>
  )
}
Header.propTypes = {
  setLanguage: PropTypes.func,
  english: PropTypes.bool,
  isRetailPage: PropTypes.bool,
  isThanksPage: PropTypes.bool,
}

export default Header
