import styled from 'styled-components';

import { breakpoints, mqBetween, mqMax } from 'shared';
import { prop } from 'styled-tools';

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
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	h1 {
		line-height: 76px;
		position: relative;
		top: -5vh;
		span {
			margin-left: 75px;
		}
	}
	.hero {
		&__title-wrapper {
			height: 60vh;
			display: flex;
			align-items: flex-end;			
		}
		&__footer {
			display: flex;
			position: relative;
			flex-grow: 1;
		}
		&__text {
			font-size: 16px;
		}
		&__bottle-container {
			overflow: hidden;
			border-radius: 25px;
			position: absolute;
			transform: translate3d(0,60px,0);
			top: 0;
			right: 0;
			&__img-wrapper {
				overflow: hidden;
				height: 100%;
				position: relative;
				img {
					display: block;
					transform: scale(1.0);
					transition: transform 0.3s ease;
				}
				&:hover {
					img {
						transform: scale(1.15);
					}
				}
			}
			&__content {
				padding: 40px 28px;
				position: relative;
				h6 {
					font-family: 'Montserrat';
					font-weight: 700;
					font-size: 14px;
					text-transform: uppercase;
					margin-bottom: 16px;
					position: relative;
				}
				p {
					position: relative;
					font-family: 'Inter';
					max-width: 265px;
					line-height: 22.4px;
					span {
						font-weight: 700;
					}
				}
				&::before {
					content: '';
					display: block;
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
					background: rgba(255, 255, 255, 0.05);
					backdrop-filter: blur(10px);
				}
			}
		}
	}
	@media ${mqMax(breakpoints.xxl)} {
		.scroll-down {
				position: relative;
			}
		.hero {
			&__footer {
				flex-flow: wrap;
				align-items: flex-start;
			}
			&__sub-title {
				width: 100%;
				margin-bottom: 20px;
			}
			&__bottle-container {
				position: relative;
				top: auto;
				right: auto;
				width: calc(100% - 30px);
				max-width: 495px;
			}
		}
	}

	@media ${mqBetween(breakpoints.md, breakpoints.xxl)} {
		.hero {
			&__title-wrapper {
				margin-bottom: 50px;
				h1 {
					span {
						margin-left: 20px;
					}
				}
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
		.scroll-down {
			width: 20px;
			&__line {
				height: calc(100% - 77px - 20px);
			}
		}
		.content-container {
			height: 100vh;
			flex-direction: column;
			align-items: flex-end;
		}
		h1 {
			line-height: 36px;
			span {
				margin-left: 5px;
			}
			br {
				display: none;
			}
		}
		.hero {
			&__title-wrapper {
				margin: 125px 0 20px;
				height: auto;
				min-height: 25vh;
				transform: translateY(0);
				p {
					margin-top: 15px;
				}
			}
			&__bottle-container {
				position: relative;
				right: auto;
				bottom: auto;
				flex-direction: column;
				max-width: 305px;
				&__content {
					padding: 20px;
				}
				&__img-wrapper {
					width: 100%;
					img {
						width: 100%;
					}
				}
			}
			&__sub-title {
				display: none;
			}
			&__footer {
				flex-flow: nowrap;
				flex-grow: 0;
				width: 100%;
				justify-content: space-between;
				margin-bottom: 20px;
			}
		}
	}
	@media ${mqMax(breakpoints.sm)} {
		.hero {
			&__title-wrapper {
				min-height: 20vh;
			}
		}
	}
`;
