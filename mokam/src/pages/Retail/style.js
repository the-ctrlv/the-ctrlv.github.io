import styled from 'styled-components'

export const StyledRetailPage = styled.div`
  .main {
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
  }

  .why-mokam {
    margin: 114px 0;
  }

  .feedback {
    padding: 87px 0 117px;
    background-color: #f2f8ff;
    h2 {
      margin-bottom: 0;
    }
    p {
      margin-bottom: 17px;
    }
    h4 {
      font-family: 'AvenirNext-Bold';
      font-size: 18px;
      letter-spacing: 0.5px;
      color: #000;
      margin-bottom: 3px;
    }
    span {
      font-family: 'Lato';
      font-size: 14px;
      color: #808080;
    }
  }

  .get-the-app {
    background-color: #0046a0;
    padding: 50px 0;
    .width-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        color: #fff;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
        color: #fff;
        font-family: 'Lato';
      }
      img {
        max-width: 300px;
      }
    }
  }
`
