import styled from 'styled-components';

import widePattern from 'assets/images/wide-pattern.svg';

import step1BG from 'assets/images/step-1.png';
import step2BG from 'assets/images/step-2.png';
import step3BG from 'assets/images/step-3.png';
import step4BG from 'assets/images/step-4.png';

import widePatternMob from 'assets/images/wide-pattern-mob.svg';

import { breakpoints, mqMax } from 'shared';

export const StyledBackOnTrack = styled.section`
  .content-container {
    margin-bottom: 110px;
    > span {
      font-family: 'Montserrat';
      font-weight: 600;
      display: block;
      text-align: center;
      margin: 0 auto 26px;
    }
  }
  h2 {
    max-width: 585px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 50px;
    line-height: 70px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto 100px;
    span {
      font-weight: 300;
      font-style: italic;
    }
  }
  .steps-list {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-flow: wrap;
      > span {
        font-family: 'Montserrat';
        font-weight: 400;
        display: block;
        font-size: 20px;
        margin: 60px auto 0;
      }
      img {
        width: calc(50% - 15px);
        height: auto;
        border-radius: 25px;
      }
      &:not(:last-child) {
        margin-bottom: 60px;
      }
      &:nth-child(1) {
        .steps-list__text-content {
          &__number {
            &:nth-child(1)::before {
              background: url(${step1BG.src}) 0 0 / cover no-repeat;
            }
            &:nth-child(2)::before {
              background: url(${step2BG.src}) 0 0 / cover no-repeat;
            }
          }
        }
      }
      &:nth-child(2) {
        .steps-list__text-content {
          &__number {
            &:nth-child(1)::before {
              background: url(${step3BG.src}) 0 0 / cover no-repeat;
            }
            &:nth-child(2)::before {
              background: url(${step4BG.src}) 0 0 / cover no-repeat;
            }
          }
        }
      }
    }
    &__text-content {
      width: calc(50% - 15px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &__number {
        padding: 73px 50px 40px;

        border-radius: 25px;
        position: relative;
        overflow: hidden;
        z-index: 1;
        h5 {
          font-size: 14px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        p {
          line-height: 22.4px;
        }
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      }
    }
  }
  .back-on-track {
    &__pattern {
      margin: 50px auto 100px;
      display: block;
      background: url(${widePattern.src}) center center/cover no-repeat;
      height: 170px;
      @media (min-width: 1440px) {
        background-size: contain;
      }
    }
  }
  @media ${mqMax(breakpoints.xl - 1)} {
    .steps-list {
      li {
        flex-flow: column;
        img {
          width: 100%;
          max-width: 600px;
          margin: 0 auto 16px;
        }
        >span {
          text-align: center;
          margin-top: 30px;
        }
        &:last-child {
          img {
            order: -1;
            display: flex;
          }
        }
      }
      &__text-content {
        width: 100%;
        &__number {
          padding: 60px 30px 30px;
          &:not(:last-child) {
            margin-bottom: 16px;
          }
        }
      }
    }
    .back-on-track {
      &__pattern {
        background: url(${widePatternMob.src}) center center/cover no-repeat;
        height: 105px;
        margin-bottom: 50px;
      }
      &::after {
        top: 20%;
        height: 80%;
        transform: none;
        left: 0;
        background-color: #788b7eb0;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .content-container {
      margin-bottom: 70px;
      >span {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
      }
    }
    .pattern {
      margin: 50px auto;
    }
    h2 {
      font-size: 30px;
      line-height: 41px;
      margin-bottom: 40px;
    }
  }
`;
