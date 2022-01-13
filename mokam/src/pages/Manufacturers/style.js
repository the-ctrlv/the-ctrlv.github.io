import styled from 'styled-components'

export const StyledManufacturersPage = styled.div`
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
        align-items: flex-start;
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
            font-family: 'AvenirNext';
            font-weight: 700;
            font-size: 24px;
            margin: 34px 0 8px;
            line-height: 1.42;
            letter-spacing: 0.5px;
            text-align: center;
            color: #000;
          }
          p {
            text-align: center;
            font-family: 'Lato';
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
    @media (max-width: 1024px) {
      margin: 68px 0 96px;
      .width-wrapper {
        .reasons {
          li {
            width: 28%;
          }
        }
        .brands {
          flex-flow: wrap;
          li {
            width: 30%;
          }
        }
      }
    }
    @media (max-width: 767px) {
      margin: 75px 0 80px;
      .width-wrapper {
        h2 {
          &:last-of-type {
            margin-bottom: 21px;
          }
        }
        .reasons {
          flex-flow: wrap;
          li {
            width: 100%;
            margin-bottom: 57px;
            p {
              max-width: 80vw;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        .brands {
          flex-flow: wrap;
          li {
            width: calc(50% - 15px);
            margin-bottom: 17px;
          }
        }
      }
    }
  }
`
