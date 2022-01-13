import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1091;
  background-color: #fff;
  border-bottom: solid 1px #ccc;
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
        img {
          transform: scale(1.2);
        }
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
            color: #1890ff;
            font-weight: 700;
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
        p {
          font-family: 'Lato';
          font-weight: 700;
          color: #1890ff;
        }
      }
      .mobile-links {
        display: none;
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
      .mobile-menu {
        display: flex;
        align-items: center;
      }
    }
  }
  .language-wrapper {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    .width-wrapper {
      .left-container {
        .logo {
          img {
            transform: none;
          }
        }
        .links {
          display: none;
        }
      }
      .right-container {
        align-items: center;
        .hotline-tel {
          margin-right: 20px;
        }
        .mobile-menu {
          position: fixed;
          z-index: 1030;
          width: 30vw;
          height: 100vh;
          right: 0;
          top: 80px;
          overflow: hidden;
          background-color: #fff;
          transition: cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.3s;
          border-top: 1px solid #d6d6d6;
          display: block;
          transform: translateX(100%);
          .mobile-links {
            display: block;
            padding: 23px 15px 0px 15px;
            font-family: 'Lato';
            a {
              display: block;
              margin-bottom: 20px;
              &.active {
                color: #1890ff;
              }
            }
          }
          .language-wrapper {
            margin: 0;
            padding-left: 15px;
            border: none;
            padding-bottom: 33px;
            .mob-lang {
              margin-right: 4px;
            }
            &::after,
            &::before {
              content: none;
            }
          }
          &.opened {
            transition: cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.3s;
            transform: translateX(0);
          }
        }
        .hamburger-button {
          cursor: pointer;
          width: 19px;
          height: 19px;
          position: relative;
          .hamburger-icon {
            background-color: #0046a0;
            position: relative;
            display: block;
            height: 2px;
            width: 100%;
            border-radius: 8px;
            transition: 0.3s;
            &--middle {
              margin: 6px 0;
            }
          }
          &.opened {
            transition: 0.3s;
            .hamburger-icon {
              transition: 0.3s;
              &--top {
                position: absolute;
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
                transition: 0.3s;
              }
              &--middle {
                opacity: 0;
              }
              &--bottom {
                position: absolute;
                top: 50%;
                transform: translateY(-50%) rotate(-45deg);
                transition: 0.3s;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .width-wrapper {
      height: 66px;
      .right-container {
        .hotline-tel {
          p,
          span {
            display: none;
          }
        }
        .mobile-menu {
          max-height: 0;
          left: 0;
          height: auto;
          top: 66px;
          width: 100%;
          transform: translateX(0);
          &.opened {
            max-height: 200px;
          }
      }
    }
  }
`
