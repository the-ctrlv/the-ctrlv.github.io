import styled from 'styled-components'

export const StyledAwards = styled.div`
  padding: 82px 0 130px;
  background-color: #f2f8ff;
  .width-wrapper {
    h2 {
      margin-bottom: 39px;
    }
    .slick-track {
      gap: 20px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      position: relative;
      flex-grow: 1;
      > li {
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
          margin: 0 auto;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    padding: 70px 0 80px;
    .width-wrapper {
      .slick-track {
        gap: 0;
      }
    }
  }
  @media (max-width: 767px) {
    .width-wrapper {
      .dots-container {
        bottom: -40px;
      }
    }
  }
`
