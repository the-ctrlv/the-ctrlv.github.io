import propTypes from 'prop-types'
import { forwardRef } from 'react'
import heroPic from '../../assets/images/hero-pic.jpg'
import heroPicTablet from '../../assets/images/hero-pic-tablet.jpg'
import telIcon from '../../assets/images/tel-icon.svg'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import { StyledStartBusiness } from './style'

const StartBusiness = forwardRef((props, ref) => (
  <StyledStartBusiness id="startBusiness" ref={ref} {...props}>
    <div className="width-wrapper">
      <div className="text-container">
        <h2>{props.english ? EN.startBusiness.title : FR.startBusiness.title}</h2>
        <p>{props.english ? EN.startBusiness.subtitle1 : FR.startBusiness.subtitle1}</p>
        <a href="/some">
          <img src={telIcon} alt="tel" />
          <span>09610066525</span>
        </a>
        <p>{props.english ? EN.startBusiness.subtitle2 : FR.startBusiness.subtitle2}</p>
        <button type="button" className="mokam-button" onClick={props.scrollToContact}>
          {props.english ? EN.startBusiness.button : FR.startBusiness.button}
        </button>
      </div>
    </div>
    {/* <img src={heroPic} alt="hero" /> */}
    <picture>
      <source media="(min-width:1025px)" srcSet={heroPic} />
      <source media="(min-width:768px)" srcSet={heroPicTablet} />
      <img src={heroPic} alt="main" />
    </picture>
  </StyledStartBusiness>
))

StartBusiness.displayName = 'StartBusiness'
StartBusiness.propTypes = {
  english: propTypes.bool,
  scrolledElToStartBusiness: propTypes.func,
  scrolledElToContactUs: propTypes.func,
  scrollToContact: propTypes.func,
}

export default StartBusiness
