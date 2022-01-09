import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  position: relative;
  padding: 75px 0;
  background-color: #f6f6f6;
  ul {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    li {
      h3 {
        display: block;
        color: #666;
        margin-bottom: 20px;
        font-size: 12px;
      }
      a {
        display: block;
        color: #4d4d4d;
        font-size: 16px;
        margin-bottom: 15px;
        &.contact-links {
          max-width: 250px;
          display: flex;
          align-items: flex-start;
          span {
            margin-top: -7px;
            margin-left: 16px;
            line-height: 26px;
          }
          &:nth-of-type(2) {
            span {
              font-family: Lato;
              font-weight: 700;
              margin-top: 0;
              color: #1890ff;
            }
          }
        }
      }
      p {
        max-width: 260px;
        margin-top: 15px;
        line-height: 20px;
        font-size: 12px;
        color: #999;
      }
      .social-media {
        display: flex;
        gap: 12px;
        a {
          margin-bottom: 0;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 58px 0 33px;
    ul {
      flex-flow: wrap;
      li {
        &:last-child {
          width: 100%;
          margin-top: 32px;
          padding-top: 16px;
          border-top: 1px solid #d6d6d6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          h3 {
            display: none;
          }
          p {
            max-width: none;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 25px 0;
    ul {
      display: block;
      li {
        &:not(:last-child) {
          margin-bottom: 17px;
          h3 {
            font-size: 18px;
            color: #4d4d4d;
            font-family: Lato;
            font-weight: 700;
          }
          .collapse-wrapper {
            a {
              &:first-child {
                margin-top: 17px;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
        &:last-child {
          h3 {
            display: none;
          }
          .social-media {
            padding-top: 32px;
            border-top: 1px solid #d6d6d6;
            justify-content: center;
          }
          p {
            max-width: none;
            text-align: center;
          }
        }
      }
    }
  }
`

export const StyledAccordion = styled.li`
  @media (max-width: 767px) {
    .collapse-title {
      cursor: pointer;
      min-width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      h3 {
        margin-bottom: 0;
        @media (min-width: 768px) {
          text-transform: uppercase;
        }
      }
      img {
        transform: rotate(0);
        transition: all 0.3s linear;
        &.rotated {
          transform: rotate(540deg);
          transition: all 0.3s linear;
        }
      }
    }
    .collapse-wrapper {
      transition: all 0.3s linear;
      overflow: hidden;
      max-height: 0;
      &.opened {
        max-height: 150px;
        transition: all 0.3s linear;
      }
    }
  }
`
