import styled from 'styled-components'

export const StyledManufacturersPage = styled.footer`
  display: block;
  .help-business {
    margin: 112px 0 124px;
    .width-wrapper {
      h2 {
        margin-bottom: 65px;
      }
      .reasons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 116px;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 30%;
          img {
            max-width: 140px;
          }
          h4 {
            font-family: 'AvenirNext-Bold';
            font-size: 24px;
            margin: 34px 0 8px;
            line-height: 1.42;
            letter-spacing: 0.5px;
            text-align: center;
            color: #000;
          }
          p {
            text-align: center;
            font-family: 'Lato-Regular';
            font-size: 18px;
            line-height: 1.56;
            color: #4d4d4d;
          }
        }
      }
      .brands {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          position: relative;
          width: 15%;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
  .awards {
    padding: 82px 0 130px;
    background-color: #f2f8ff;
    .width-wrapper {
      h2 {
        margin-bottom: 39px;
      }
      ul {
        display: flex;
        justify-content: space-between;
        li {
          width: 32%;
          background-color: #fff;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 32px 16px 30px;
          img {
            max-height: 156px;
          }
          h4 {
            margin: 23px 0 7px;
            font-family: 'AvenirNext-Bold';
            font-size: 20px;
            line-height: 1.6;
            letter-spacing: 0.5px;
            color: #000;
          }
          p {
            max-width: 300px;
            line-height: 1.56;
            font-size: 18px;
            color: #4d4d4d;
          }
        }
      }
    }
  }
`
