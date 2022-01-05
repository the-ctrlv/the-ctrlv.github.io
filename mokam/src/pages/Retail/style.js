import styled from 'styled-components'

export const StyledRetailPage = styled.div`
  .why-mokam {
    margin: 114px 0;
    @media (max-width: 1024px) {
      margin: 68px 0;
      .text-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-flow: wrap;
        .content-item {
          padding: 0;
          width: 48%;
          text-align: center;
          margin-bottom: 60px;
          &:last-child {
            margin-bottom: 0px;
          }
          img {
            height: 165px;
          }
          h3 {
            margin: 35px 0 7px;
          }
          &::after {
            content: none;
          }
        }
      }
    }
    @media (max-width: 767px) {
      margin: 75px 0;
      h2 {
        margin-bottom: 55px;
      }
      .text-container {
        .content-item {
          width: 100%;
        }
      }
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
    @media (max-width: 767px) {
      padding: 55px 0 100px;
      .subtitle {
        display: none;
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
        width: 300px;
      }
    }
    @media (max-width: 1024px) {
      .width-wrapper {
        h2 {
          font-size: 30px;
        }
        img {
          width: 230px;
        }
      }
    }
    @media (max-width: 767px) {
      .width-wrapper {
        flex-flow: wrap;
        justify-content: center;
        > div {
          width: 100%;
          max-width: 280px;
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
  }
`
