import styled from 'styled-components'

export const StyledMainSection = styled.div`
  position: relative;
  margin-top: 80px;
  img {
    display: block;
    width: 100%;
  }
  .width-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: #000;
      font-size: 48px;
      max-width: 600px;
      line-height: 68px;
      font-family: 'AvenirNext-Bold';
    }
    h3 {
      margin: 17px 0 24px;
      font-family: 'Lato-bold';
      line-height: 32px;
      letter-spacing: -0.2px;
      color: #1a1a1a;
      font-size: 24px;
    }
  }
  @media (max-width: 1024px) {
    .width-wrapper {
      h1 {
        color: #fff;
        max-width: 535px;
      }
      h3 {
        color: #fff;
      }
    }
  }
  @media (max-width: 767px) {
    margin-top: 66px;
    .width-wrapper {
      .content-wrapper {
        text-align: center;
        width: 100%;
        h1 {
          font-size: 38px;
          line-height: 49px;
          margin: 0 auto;
          max-width: 80vw;
        }
        h3 {
          max-width: 270px;
          font-size: 20px;
          text-align: center;
          display: block;
          margin: 13px auto 40px;
        }
        a {
          width: 100%;
        }
      }
    }
  }
`
