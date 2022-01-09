import styled from 'styled-components'

export const StyledGetInTouch = styled.div`
  margin: 65px 0 96px;
  .width-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-bottom: 0;
    }
    form {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      max-width: 770px;
      width: 100%;
      label {
        width: calc(50% - 15px);
        color: #808080;
        font-size: 14px;
        margin-bottom: 18px;
        position: relative;
        input {
          display: block;
          width: 100%;
          font-size: 16px;
          margin-top: 5px;
          padding: 12px;
          border-radius: 4px;
        }
        &:last-of-type {
          width: 100%;
          margin-bottom: 0;
          textarea {
            display: block;
            width: 100%;
            display: block;
            font-size: 16px;
            margin-top: 5px;
            padding: 12px;
            border-radius: 4px;
            border: solid 1px #b3b3b3;
            resize: none;
            appearance: none;
            font-family: 'Lato';
          }
        }
        p {
          position: absolute;
          left: 0;
          bottom: -16px;
          font-size: 12px;
        }
        &.invalid {
          color: #d74241;
          input,
          .css-1s2u09g-control {
            border-color: #d74241 !important;
          }
          p {
            color: #d74241;
          }
        }
      }
      .button-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 32px;
      }
    }
  }
  @media (max-width: 1024px) {
    .width-wrapper {
      form {
        padding: 0 60px;
      }
    }
  }
  @media (max-width: 767px) {
    margin: 55px 0 60px;
    .width-wrapper {
      form {
        padding: 0;
        label {
          width: 100%;
        }
        a {
          width: 100%;
        }
      }
    }
  }
`
