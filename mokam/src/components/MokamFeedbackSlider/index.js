import mediaSliderImage1 from '../../assets/images/media-slider-image1.png'
import { StyledMokamFeedbackSlider } from './style'

function MokamFeedbackSlider() {
  var settings = {
    dotsClass: 'dots-container',
    speed: 500,
    pauseOnHover: true,
    infinite: true,
    buttons: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  }

  return (
    <StyledMokamFeedbackSlider {...settings}>
      <div className="feedback-post">
        <div className="media-container">
          <img src={mediaSliderImage1} alt="" />
        </div>
        <div className="text-container">
          <p>Mokam always ensures good price and quick delivery, which is why I want to continue working with Mokam.</p>
          <h4>Pankaj Kumar Bishshash</h4>
          <span>Bishshash Traders, Dhour </span>
        </div>
      </div>
      <div className="feedback-post">
        <div className="media-container">
          <img src={mediaSliderImage1} alt="" />
        </div>
        <div className="text-container">
          <p>
            I am glad to be doing business with Mokam – where other companies take 4/5 days to deliver, Mokam ensures super fast door-step
            delivery.
          </p>
          <h4>MD. Jalaluddin</h4>
          <span>Atik Rice Agency, Chandona Chourasta Gazipur</span>
        </div>
      </div>
      <div className="feedback-post">
        <div className="media-container">
          <img src={mediaSliderImage1} alt="" />
        </div>
        <div className="text-container">
          <p>
            I have been with Mokam for the last 1.5 years and I am getting stellar service. Mokam ensures on-time delivery and more
            importantly, their salespersons are very helpful.
          </p>
          <h4>MD. Shojol Ahmed</h4>
          <span>Molik Enterprise, Sayeednagar -Notunbajar</span>
        </div>
      </div>
      <div className="feedback-post">
        <div className="media-container">
          <img src={mediaSliderImage1} alt="" />
        </div>
        <div className="text-container">
          <p>I have been with Mokam for the last 1.5 years and I like them because they always keep their commitments.</p>
          <h4>Mostofa Kamal Khokon</h4>
          <span>Bengal Traders, Jatrabari</span>
        </div>
      </div>
    </StyledMokamFeedbackSlider>
  )
}
export default MokamFeedbackSlider
