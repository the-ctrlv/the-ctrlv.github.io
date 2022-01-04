import styled from 'styled-components'

export const StyledStartBusiness = styled.div`
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
`