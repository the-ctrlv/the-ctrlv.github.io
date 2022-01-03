import propTypes from 'prop-types'
import pinIcon from '../../assets/images/pin-icon.svg'
import mailIcon from '../../assets/images/mail-icon.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import youtubeIcon from '../../assets/images/youtube.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import { StyledFooter } from './style'
import Accordion from './accordion'

function Footer({ english }) {
  return (
    <StyledFooter>
      <div className="width-wrapper">
        <ul>
          <Accordion title={english ? EN.footer.column1.title : FR.footer.column1.title}>
            <a href="/some">{english ? EN.footer.column1.link1 : FR.footer.column1.link1}</a>
            <a href="/some">{english ? EN.footer.column1.link2 : FR.footer.column1.link2}</a>
          </Accordion>
          <Accordion title={english ? EN.footer.column1.title : FR.footer.column1.title}>
            <a href="/some">{english ? EN.footer.column2.link1 : FR.footer.column2.link1}</a>
            <a href="/some">{english ? EN.footer.column2.link2 : FR.footer.column2.link2}</a>
            <a href="/some">{english ? EN.footer.column2.link3 : FR.footer.column2.link3}</a>
            <a href="/some">{english ? EN.footer.column2.link4 : FR.footer.column2.link4}</a>
          </Accordion>
          <Accordion title={english ? EN.footer.column1.title : FR.footer.column1.title}>
            <a href="/some" className="contact-links">
              <img src={pinIcon} alt="map" />
              <span>{english ? EN.footer.column3.link1 : FR.footer.column3.link1}</span>
            </a>
            <a href="/some" className="contact-links">
              <img src={mailIcon} alt="mail" />
              <span>{english ? EN.footer.column3.link2 : FR.footer.column3.link2}</span>
            </a>
          </Accordion>
          <li>
            <h3>{english ? EN.footer.column4.title : FR.footer.column4.title}</h3>
            <div className="social-media">
              <a href="https://www.facebook.com/MokamApp" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="mail" />
              </a>
              <a href="https://www.linkedin.com/company/mokamltd/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="mail" />
              </a>
              <a href="https://www.youtube.com/channel/UCllWgqIpwe2ts0hnN-u0qdw" target="_blank" rel="noreferrer">
                <img src={youtubeIcon} alt="mail" />
              </a>
            </div>
            <p>{english ? EN.footer.column4.copyright : FR.footer.column4.copyright}</p>
          </li>
        </ul>
      </div>
    </StyledFooter>
  )
}
Footer.propTypes = {
  english: propTypes.bool,
}

export default Footer
