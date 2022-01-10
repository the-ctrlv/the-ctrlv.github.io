import propTypes from 'prop-types'
import EN from '../../shared/language/en.js'
import FR from '../../shared/language/fr.js'
import { StyledMokamFeedbackSlider } from './style'

function MokamFeedbackSlider({ english }) {
  var settings = {
    dotsClass: 'dots-container',
    speed: 500,
    pauseOnHover: true,
    infinite: true,
    buttons: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
  }

  return (
    <StyledMokamFeedbackSlider {...settings}>
      <div className="feedback-post">
        <div className="media-container">
          <iframe title="Retailer Shajal" width="100%" height="100%" frameBorder="{0}" src="https://www.youtube.com/embed/4DHXVh_-X9g" />
        </div>
        <div className="text-container">
          <p>{english ? EN.feedback.post1.text : FR.feedback.post1.text}</p>
          <h4>{english ? EN.feedback.post1.name : FR.feedback.post1.name}</h4>
          <span>{english ? EN.feedback.post1.company : FR.feedback.post1.company}</span>
        </div>
      </div>
      <div className="feedback-post">
        <div className="media-container">
          <iframe title="Retailer Pankaj" width="100%" height="100%" frameBorder="{0}" src="https://www.youtube.com/embed/URPzlmwJ0vc" />
        </div>
        <div className="text-container">
          <p>{english ? EN.feedback.post2.text : FR.feedback.post2.text}</p>
          <h4>{english ? EN.feedback.post2.name : FR.feedback.post2.name}</h4>
          <span>{english ? EN.feedback.post2.company : FR.feedback.post2.company}</span>
        </div>
      </div>
      <div className="feedback-post">
        <div className="media-container">
          <iframe
            title="Retailer Jalaluddin"
            width="100%"
            height="100%"
            frameBorder="{0}"
            src="https://www.youtube.com/embed/orItI-N0_S0"
          />
        </div>
        <div className="text-container">
          <p>{english ? EN.feedback.post3.text : FR.feedback.post3.text}</p>
          <h4>{english ? EN.feedback.post3.name : FR.feedback.post3.name}</h4>
          <span>{english ? EN.feedback.post3.company : FR.feedback.post3.company}</span>
        </div>
      </div>
      <div className="feedback-post">
        <div className="media-container">
          <iframe title="Retailer Khokon" width="100%" height="100%" frameBorder="{0}" src="https://www.youtube.com/embed/yAkYyaR-AeU" />
        </div>
        <div className="text-container">
          <p>{english ? EN.feedback.post4.text : FR.feedback.post4.text}</p>
          <h4>{english ? EN.feedback.post4.name : FR.feedback.post4.name}</h4>
          <span>{english ? EN.feedback.post4.company : FR.feedback.post4.company}</span>
        </div>
      </div>
    </StyledMokamFeedbackSlider>
  )
}
MokamFeedbackSlider.propTypes = {
  english: propTypes.bool,
}
export default MokamFeedbackSlider
