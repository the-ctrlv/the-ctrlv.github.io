import pinIcon from '../../assets/images/pin-icon.svg'
import mailIcon from '../../assets/images/mail-icon.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import youtubeIcon from '../../assets/images/youtube.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'
import { StyledFooter } from './style'
import Accordion from './accordion'

function Footer() {
  return (
    <StyledFooter>
      <div className="width-wrapper">
        <ul>
          <Accordion title="Important Link">
            <a href="/some">Retailer</a>
            <a href="/some">Supplier</a>
          </Accordion>
          <Accordion title="Legal">
            <a href="/some">IPR Infringement Policy</a>
            <a href="/some">Permitted Usage Policy</a>
            <a href="/some">Privacy Policy</a>
            <a href="/some">Terms of Service</a>
          </Accordion>
          <Accordion title="Contact">
            <a href="/some" className="contact-links">
              <img src={pinIcon} alt="map" />
              <span>
                B112, Road 06, Mohakhali <br /> DOHS, Dhaka-1206
              </span>
            </a>
            <a href="/some" className="contact-links">
              <img src={mailIcon} alt="mail" />
              <span>hello@mokam.com.bd</span>
            </a>
          </Accordion>
          <li>
            <h3>Get connected</h3>
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
            <p>© Copyright 2021 Mokam Limited. All rights reserved</p>
          </li>
        </ul>
      </div>
    </StyledFooter>
  )
}

export default Footer
