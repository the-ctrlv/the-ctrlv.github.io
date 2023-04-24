import styled from 'styled-components';
import { prop } from 'styled-tools';

import { breakpoints, mqMax } from 'shared';

export const StyledHero = styled.section`
	// backgroundImage is coming from the CMS
	background: url(${prop('backgroundImage')}) center center/cover no-repeat;
	// filter hex and alpha are coming from the CMS
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${prop('filter.hex')};
		opacity: ${prop('filter.alpha')};
	}
  .content-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  h1 {
    max-width: 650px;
  }
  .hero {
    &__title-wrapper {
      height: 50vh;
      display: flex;
      align-items: flex-end;
    }
    &__footer {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      position: relative;
      flex-grow: 1;
      margin-top: 10vh;
    }
    &__text {
      width: calc(100% - 50px);
      max-width: 400px;
      line-height: 22.4px;
    }
  }
  @media ${mqMax(breakpoints.md)} {
    h1 {
      max-width: 340px;
    }
    .scroll-down {
      width: 20px;
      margin-top: 5vh;
      &__line {
        height: 200px;
      }
    }
		.hero {
			&__text {
				position: relative;
				bottom: auto;
				right: auto;
			}
			&__footer {
				align-items: center;
				margin-top: 0;
			}
		}
  }
`;
