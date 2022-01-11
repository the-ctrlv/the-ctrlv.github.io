import Slider from 'react-slick'
import styled from 'styled-components'
import playButton from '../../assets/images/play-button.svg'

export const StyledMokamFeedbackSlider = styled(Slider)`
  .feedback-post {
    display: flex !important;
    .media-container {
      padding: 30px;
      width: 40%;
      position: relative;
      a {
        height: 100%;
        width: 100%;
        border-radius: 4px;
        outline: none;
        img {
          display: block;
          width: 100%;
          margin: 0 auto;
        }
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        background: url(${playButton}) center center/cover no-repeat;
        width: 50px;
        height: 50px;
        cursor: pointer;
        pointer-events: none;
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
        margin-bottom: 25px;
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
        a {
          img {
            max-width: 400px;
          }
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
    .slick-slide {
      > div {
        height: 100%;
      }
    }
    .feedback-post {
      flex-direction: column;
      height: 100%;
      .media-container {
        width: 100%;
      }
      .text-container {
        height: calc(100% - 320px);
        width: 100%;
        padding: 0;
        margin-top: -20px;
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
