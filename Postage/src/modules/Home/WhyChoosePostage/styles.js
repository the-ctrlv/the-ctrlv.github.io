import styled from 'styled-components';

import { breakpoints, mqMax } from 'shared';

export const StyledWhyChoosePostage = styled.section`
  .content-container {
    margin: 160px auto;
    color: #f3f3f3;
  }
  h2 {
    text-align: center;
    font-size: 50px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    margin-bottom: 70px;
  }
  .why-postage {
    &__reasons-list {
      flex-flow: wrap;
      li {
        width: calc(50% - 15px);
        background: rgba(8, 9, 8, 0.2);
        border: 1px solid #949896;
        backdrop-filter: blur(25px);
        border-radius: 100px;
        padding: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 84px;
          height: 84px;
          margin-right: 16px;
          display: block;
        }
        p {
          font-family: 'Montserrat';
          line-height: 19.4px;
          font-weight: 500;
          text-transform: uppercase;
          max-width: 380px;
          width: calc(100% - 94px);
          margin-left: 10px;
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          width: calc(33% - 15px);
          margin-bottom: 30px;
        }
      }
      &__image-wrapper {
        width: 84px;
        height: 84px;
        border-radius: 100%;
        position: relative;
        overflow: hidden;
      }
      &__image {
        height: 84px;
        width: auto;
        display: block;
      }
    }
  }

  @media ${mqMax(breakpoints.xl)} {
		.why-postage {
			.content-container {
			}
			&__reasons-list {
				flex-flow: wrap;
				li {
					width: 100% !important;
					margin-bottom: 16px;
					p {
						max-width: none;
					}
				}
			}
		}
	}

  @media ${mqMax(breakpoints.md)} {
    .why-postage {
			.content-container {
				margin: 80px auto;
				h2 {
					font-size: 30px;
				}
			}
			&__reasons-list {
				flex-flow: wrap;
				li {
					width: 100% !important;
					margin-bottom: 16px;
				}
			}
		}
  }
  
`;
