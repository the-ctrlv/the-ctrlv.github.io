import styled from 'styled-components'

export const StyledGetInTouch = styled.form`
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
        input {
          display: block;
          width: 100%;
          font-size: 16px;
          margin-top: 5px;
          padding: 12px;
          border-radius: 4px;
          border: solid 1px #b3b3b3;
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
            font-family: 'Lato-Regular';
            &:focus,
            &:focus-visible {
              border: solid 1px #448aff;
            }
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
`
