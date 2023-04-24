import styled from 'styled-components';

import privacyTermsBG from 'assets/images/privacy-terms-bg.jpg';
import { breakpoints, mqMax } from 'shared';

export const StyledAssessment = styled.section`
  background-color: #E4E6E5;
  flex-grow: 1;
  .section-title-wrapper {
    background: url(${privacyTermsBG.src}) center center/cover no-repeat;
    text-align: center;
    position: relative;
  }
  h1 {
    text-transform: initial;
    position: relative;
    font-size: 38px;
    top: 20px;
    
    @media ${mqMax(breakpoints.md)} {
      font-size: 19px;
    }
  }
  .steps-counter {
    display: block;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: 30%;
    letter-spacing: 2px;
    transform: translate3d(-50%, -50%, 0);
    text-transform: uppercase;
    white-space: nowrap;
    b {
      letter-spacing: 0;
    }
    @media ${mqMax(breakpoints.md)} {
      font-size: 16px;
    }
  }
  .subtitle {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    margin-top: 10px;
    display: block;
    width: 100%;
  }
  .content-container {
    &--assessment {
     max-width: 900px;
     margin: 0 auto;
     > form {
      transform: translateY(-50px);
      @media ${mqMax(breakpoints.lg)} {
        transform: translateY(-100px);
        margin-bottom: -60px;
      }
     }
    }
  }

  @media ${mqMax(breakpoints.xl - 1)} {
    .content-container {
      &--assessment {
        flex-flow: wrap;
        margin: 0 auto;
        padding: 30px 0 0;
        max-width: 500px;
      }
    }
  }
`;
