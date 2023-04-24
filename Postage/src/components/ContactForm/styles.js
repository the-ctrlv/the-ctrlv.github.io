import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledContactForm = styled.form`
  text-align: center;
  .contact-form {
    &__row {
      margin-bottom: 30px;
      &--with-select {
        position: relative;
        z-index: 1;
      }
    }
    &__wrapper {
      width: calc(50% - 15px);
      position: relative;
      input {
        width: 100%;
        padding: 20px 40px;
        border: 1px solid #949896;
        background-color: transparent;
        border-radius: 100px;
        color: #fff;
        &:hover {
          border: 1px solid #fff;
        }
        &:focus {
          border: 1px solid ${colors.button};
        }
        &.invalid {
          border: 1px solid #ca0b00;
        }
        &::placeholder {
          color: #a9a9a9;
          font-size: 14px;
        }
      }
      &--textarea {
        width: 100%;
        margin-bottom: 30px;
        textarea {
          width: 100%;
          border: 1px solid #949896;
          background-color: transparent;
          border-radius: 30px;
          height: 200px;
          resize: none;
          padding: 30px 40px;
          color: #fff;
          &::placeholder {
            color: #a9a9a9;
            font-size: 14px;
          }
          &:hover {
            border: 1px solid #fff;
          }
          &:focus {
            border: 1px solid ${colors.button};
          }
          &.invalid {
            border: 1px solid #ca0b00;
          }
        }
      }
    }
    &__validation-error {
      color: #ca0b00;
      font-size: 12px;
      position: absolute;
      left: 40px;
      bottom: -20px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
    }
    &__btn {
      padding: 16.5px 100px;
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .contact-form {
      &__wrapper {
        margin-bottom: 20px;
        width: 100%;
        input,
        textarea {
          padding: 20px 24px;
        }
      }
      &__row {
        flex-flow: wrap;
        margin-bottom: 0;
      }
      &__validation-error {
        font-size: 10px;
        bottom: -14px;
        left: 20px;
      }
    }
  }
`;
