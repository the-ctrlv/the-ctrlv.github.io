import Slider from 'react-slick'
import styled from 'styled-components'

export const StyledMokamFeedbackSlider = styled(Slider)`
  .feedback-post {
    display: flex !important;
    .media-container {
      padding: 60px;
      width: 40%;
      height: 400px;
      iframe {
        height: 100%;
        border-radius: 4px;
        width: auto;
      }
    }
    .text-container {
      padding: 60px 0;
      width: 60%;
      p {
        margin-top: 50px;
        font-family: 'Lato';
        font-weight: 700;
        font-size: 20px;
        letter-spacing: -0.2px;
        color: #1a1a1a;
        max-width: 700px;
        line-height: 1.33;
        letter-spacing: -0.2px;
      }
      h4 {
        font-family: 'AvenirNext-Bold';
        letter-spacing: 0.5px;
        color: #000;
      }
      span {
        font-family: 'Lato';
        font-size: 14px;
        color: #808080;
      }
    }
  }
  @media (max-width: 1024px) {
    .feedback-post {
      padding-top: 51px;
      .media-container {
        padding: 0;
        height: 300px;
        iframe {
          width: 100%;
        }
      }
      .text-container {
        padding: 0 0 0 37px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          margin-top: 0;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .feedback-post {
      display: block !important;
      .media-container {
        width: 100%;
      }
      .text-container {
        width: 100%;
        padding: 0;
        margin-top: 33px;
        font-family: 'Lato';
        font-weight: 700;
        text-align: center;
        p {
          font-size: 20px;
          padding: 0 5px;
        }
        span {
          margin-bottom: 20px;
        }
      }
    }
  }
`
