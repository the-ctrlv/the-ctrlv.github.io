import styled from 'styled-components'

export const StyledContentSlider = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  .media-container {
    width: 45%;
    margin-right: 5%;
    overflow: hidden;
    .slick-slide {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 400px;
        }
      }
    }
  }
  .text-container {
    width: 50%;
    .content-item {
      transition: 1s;
      position: relative;
      padding: 0 0 40px 50px;
      cursor: pointer;
      &:not(:first-child) {
        &::after {
          content: '';
          display: block;
          height: 100%;
          width: 3px;
          background-color: #ccc;
          position: absolute;
          left: 0;
          top: -100%;
          z-index: -1;
        }
      }
      h3 {
        font-size: 24px;
        letter-spacing: 0.5px;
        color: #000;
        font-family: 'AvenirNext';
        font-weight: 700;
      }
      p {
        font-size: 18px;
        max-width: 440px;
        color: #4d4d4d;
        line-height: 28px;
        margin-top: 7px;
        @media (max-width: 767px) {
          margin: 7px auto;
          max-width: 320px;
        }
      }
      svg {
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(-46%);
      }
      &.active {
        &::after {
          background-color: #0046a0;
        }
        h3 {
          @media (min-width: 1025px) {
            color: #448aff;
          }
        }
        svg {
          circle {
            stroke: #0046a0;
            &:last-child {
              fill: #0046a0;
            }
          }
        }
      }
    }
  }
`
