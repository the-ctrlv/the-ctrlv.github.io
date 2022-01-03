import styled from 'styled-components'

export const StyledRetailPage = styled.div`
  .main {
    position: relative;
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

  .start-business {
    display: flex;
    justify-content: flex-end;
    position: relative;
    .width-wrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      .text-container {
        max-width: 400px;
        transform: translateY(-20%);
        h2 {
          text-align: left;
          margin-bottom: 37px;
        }
        p {
          font-size: 18px;
          color: #4d4d4d;
          margin-bottom: 13px;
          &:last-of-type {
            margin: 32px 0 20px;
          }
        }
        a {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            margin-right: 8px;
          }
          span {
            font-family: 'AvenirNext-Bold';
            color: #448aff;
            font-size: 30px;
          }
        }
      }
    }
    img {
      width: 50%;
      max-width: 750px;
    }
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

  .get-in-touch {
    margin: 65px 0 96px;
    .width-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        margin-bottom: 0;
      }
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
