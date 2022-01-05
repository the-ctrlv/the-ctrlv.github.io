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
  }
`
