import styled from 'styled-components'

export const StyledMainSection = styled.div`
  position: relative;
  margin-top: 80px;
  img {
    display: block;
    width: 100vw;
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
      line-height: 1.33;
      letter-spacing: -0.2px;
      color: #1a1a1a;
    }
  }
  @media (max-width: 1024px) {
    .width-wrapper {
      h1 {
        color: #fff;
        max-width: 450px;
      }
      h3 {
        color: #fff;
      }
    }
  }
  @media (max-width: 767px) {
    .width-wrapper {
      .content-wrapper {
        text-align: center;
        h1 {
          line-height: 58px;
        }
        h3 {
          max-width: 270px;
          font-size: 20px;
          text-align: center;
          display: block;
          margin: 13px auto 40px;
        }
        a {
          margin: 0 auto;
        }
      }
    }
  }
`
