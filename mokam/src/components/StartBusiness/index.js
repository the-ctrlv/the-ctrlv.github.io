import propTypes from 'prop-types'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import heroPic from '../../assets/images/hero-pic.jpg'
import heroPicTablet from '../../assets/images/hero-pic-tablet.jpg'
import telIcon from '../../assets/images/tel-icon.svg'
import { StyledStartBusiness } from './style'

export const StartBusiness = forwardRef((props, ref) => {
  const { t } = useTranslation()
  return (
    <StyledStartBusiness id="startBusiness" ref={ref} {...props}>
      <div className="width-wrapper">
        <div className="text-container">
          {props.manufacturersPage ? <h2>{t('startBusiness.title2')}</h2> : <h2>{t('startBusiness.title')}</h2>}

          <p>{t('startBusiness.subtitle1')}</p>
          <a href="/some">
            <img src={telIcon} alt="tel" />
            <span>{t('startBusiness.telNumber')}</span>
          </a>
          <p>{t('startBusiness.subtitle2')}</p>
          <button type="button" className="mokam-button" onClick={props.scrollToContact}>
            {t('startBusiness.button')}
          </button>
        </div>
      </div>
      <picture>
        <source media="(min-width:1025px)" srcSet={heroPic} />
        <source media="(min-width:768px)" srcSet={heroPicTablet} />
        <img src={heroPic} alt="main" />
      </picture>
    </StyledStartBusiness>
  )
})

StartBusiness.displayName = 'StartBusiness'
StartBusiness.propTypes = {
  english: propTypes.bool,
  scrollToContact: propTypes.func,
  manufacturersPage: propTypes.bool,
}

export default StartBusiness
