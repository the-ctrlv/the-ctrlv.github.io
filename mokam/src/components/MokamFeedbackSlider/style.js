import Slider from 'react-slick'
import styled from 'styled-components'

export const StyledMokamFeedbackSlider = styled(Slider)`
  .feedback-post {
    display: flex !important;
    .media-container {
      padding: 60px;
      width: 40%;
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
        font-family: 'Lato-Regular';
        font-size: 24px;
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
  .dots-container {
    display: flex !important;
    gap: 3px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    cursor: pointer;
    li {
      width: 10px;
      height: 10px;
      background-color: #cce2ff;
      border-radius: 50%;
      margin: 0px 4px;
      position: relative;
      overflow: hidden;
      button {
        opacity: 0;
        position: absolute;
        cursor: pointer;
      }
      &.slick-active {
        background-color: #0046a0;
        width: 25px;
        border-radius: 15px;
      }
    }
  }
`
