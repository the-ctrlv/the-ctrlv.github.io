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
      button {
        padding: 12px 6px;
        border-radius: 6px;
        background-color: #448aff;
        width: 258px;
        cursor: pointer;
        font-family: 'Lato-bold';
        font-size: 16px;
        color: #fff;
        appearance: none;
        border: none;
      }
    }
  }
`
