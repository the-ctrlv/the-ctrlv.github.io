import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import mokamLogo from '../../assets/images/mokam-logo.svg'
import mokamLogoTranslated from '../../assets/images/mokam-logo-translated.svg'
import telIcon from '../../assets/images/tel-icon.svg'
import languageIcon from '../../assets/images/language-icon.svg'
import { getClassNames, useWindowResize } from '../../shared/functions'
import { StyledHeader } from './style'

function Header({ isRetailPage, isThanksPage, currLang, setCurrLang }) {
  const [open, setOpen] = useState(false)
  const [mobileView, setMobileView] = useState(null)
  const { width } = useWindowResize()
  const { t, i18n } = useTranslation()
  const [switchTo, setSwitchTo] = useState(null)
  const currentUrl = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1) + switchTo
  useEffect(() => {
    setMobileView(width <= 1024)
  }, [width])

  useEffect(() => {
    if (currLang === 'en') {
      setSwitchTo('bn')
    } else if (currLang === 'bn') {
      setSwitchTo('en')
    }
  }, [currLang, setSwitchTo])

  useEffect(() => {
    i18n.changeLanguage(currLang)
  }, [i18n, currLang])

  const switchLanguage = () => {
    if (currLang === 'en') {
      setCurrLang('bn')
    } else if (currLang === 'bn') {
      setCurrLang('en')
    }
  }
  const switchMenu = () => {
    setOpen(!open)
  }

  return (
    <StyledHeader>
      <div className="width-wrapper">
        <div className="left-container">
          <Link to={`/retail/${currLang}`} className="logo">
            <img src={currLang === 'en' ? mokamLogo : mokamLogoTranslated} alt="" />
          </Link>
          <div className="links">
            <Link to={`/retail/${currLang}`} className={getClassNames(isRetailPage && !isThanksPage && 'active')}>
              {t('header.link1')}
            </Link>
            <Link to={`/manufacturers/${currLang}`} className={getClassNames(!isRetailPage && !isThanksPage && 'active')}>
              {t('header.link2')}
            </Link>
          </div>
        </div>
        <div className="right-container">
          <a href="tel:09610066525" className="hotline-tel">
            <img src={telIcon} alt="telephone" />
            <span>{t('header.telTitle')}</span>
            <p>{t('header.telNumber')}</p>
          </a>
          <div className={getClassNames('mobile-menu', open && 'opened')}>
            <div className="mobile-links">
              <Link to={`/retail/${currLang}`} className={getClassNames(isRetailPage && !isThanksPage && 'active')} onClick={switchMenu}>
                Retail
              </Link>
              <Link
                to={`/manufacturers/${currLang}`}
                className={getClassNames(!isRetailPage && !isThanksPage && 'active')}
                onClick={switchMenu}
              >
                Manufacturers
              </Link>
            </div>
            <Link to={currentUrl} className="language-wrapper" onClick={switchLanguage}>
              <img src={languageIcon} alt="" />
              {mobileView && <span className="mob-lang">Language: </span>}
              <span>{t(`header.${mobileView ? 'languageMob' : 'language'}`)}</span>
            </Link>
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
  isRetailPage: PropTypes.bool,
  isThanksPage: PropTypes.bool,
  currLang: PropTypes.string,
  setCurrLang: PropTypes.func,
}

export default Header
