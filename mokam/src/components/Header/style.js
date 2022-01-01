import styled from 'styled-components'

export const StyledHeader = styled.header`
  .width-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-container {
      display: flex;
      align-items: stretch;
      height: 80px;
      .logo {
        margin-right: 45px;
        display: flex;
        align-items: center;
      }
      .links {
        display: flex;
        a {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 20px;
          position: relative;
          &.active {
            &::after {
              content: '';
              display: block;
              width: 100%;
              height: 4px;
              bottom: 0;
              left: 0;
              position: absolute;
              background-color: #1890ff;
            }
          }
        }
      }
    }
    .right-container {
      display: flex;
      .hotline-tel {
        display: flex;
        align-items: center;
        gap: 10px;
        span {
          font-size: 14px;
          color: #4d4d4d;
        }
        a {
          font-family: 'Lato-Bold';
          color: #1890ff;
        }
      }
      .language-wrapper {
        margin-left: 28px;
        padding: 0 25px;
        display: flex;
        align-items: center;
        position: relative;
        min-width: 48px;
        img {
          margin-right: 4px;
        }
        &::before,
        &::after {
          content: '';
          height: 80px;
          width: 2px;
          background-color: #d8d8d8;
          position: absolute;
        }
        &::before {
          left: 0;
        }
        &::after {
          right: 0;
        }
      }
    }
  }
  .language-wrapper {
    cursor: pointer;
  }
`
