import styled from 'styled-components';
import fullPackageBG from 'assets/images/full-package-bg.jpg';
import fullPackageBGMob from 'assets/images/full-package-bg-mob.jpg';
import { breakpoints, mqBetween, mqMax } from 'shared';
import { prop } from 'styled-tools';

export const StyledMembership = styled.div`
	position: relative;
	overflow: hidden;
	color: #fff;
	.content-container {
		height: 100%;
		display: flex;
		align-items: center;
		&--list {
			justify-content: flex-end;
			}
		p {
			font-size: 20px;
			font-weight: 400;
			line-height: 30px;
		}
	}
	.membership {
		&__background-sticky {
			
			height: 100vh;
			width: 100%;
			position: absolute;
			overflow: hidden;
			&__image {
				height: 140%;
				width: 140%;
				right: -9%;
				position: inherit;
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
			}
			

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				width: 100vw;
				height: 20%;
				background: linear-gradient(180deg, #0A070A 0%, rgba(10, 7, 10, 0) 100%);
				transform: rotate(180deg);
				pointer-events: none;
				z-index: 1;
			}
			&::before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 100vw;
				height: 10%;
				background: linear-gradient(180deg, #0A070A 0%, rgba(10, 7, 10, 0) 100%);
				pointer-events: none;
				z-index: 1;
			}
		}
		&__title-wrapper {
			max-width: 335px;
			height: 70vh;
			font-family: 'Montserrat';
			transition-delay: 0s !important;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__pre-title {
			font-weight: 500;
			display: block;
			margin-bottom: 26px;
		}
		&__line {
			width: 100%;
			height: 1px;
			background-color: #fff;
			opacity: 0.4;
			display: block;
			margin-bottom: 50px;
		}
	}
	@media ${mqMax(breakpoints.xl - 1)} {
		height: auto;
		min-height: 100vh;
		background: url(${fullPackageBG.src}) center center/cover no-repeat;
		padding: 70px 0;
		background-position-x: 70%;
		.content-container {
			flex-flow: wrap;
			justify-content: center;
			&--list {
				flex-direction: column;
			}
		}
		.membership {
			&__title-wrapper {
				height: auto;
				max-width: 100%;
				text-align: center;
				margin-bottom: 70px;
				h2 {
					margin-bottom: 30px;
				}
			}
			&__background-sticky {
				position: relative;
				height: auto;
				&::after, &:before {
					content: none;
				}
			}
		}
	}
	@media ${mqBetween(breakpoints.xl, breakpoints.xxl)} {
		.membership {
			&__background-sticky {
				&__image {
					width: 130%;
					height: 130%;
				}
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
		background: url(${fullPackageBGMob.src}) center center/cover no-repeat;
	}
`;
