import styled from 'styled-components';

import { breakpoints, colors, mqBetween, mqMax } from 'shared';

import logoPattern from 'assets/images/logo-pattern.svg';

export const StyledBenefits = styled.section`
	display: flex;
	align-items: center;
	position: relative;
	height: 100vh;
	&::before {
		content: '';
		display: block;
		width: 100vw;
		height: 90%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 5%;
		background: url(${logoPattern.src}) center center/cover no-repeat;
		z-index: 1;
	}
	.benefits {
		
		&__list {
			margin-bottom: 50px;
			li {
				width: calc(25% - 15px);
				overflow: hidden;
				background-color: #E4E6E5;
				border-radius: 25px;
				height: 420px;
				display: flex;
				flex-direction: column;
				position: relative;
				z-index: 1;
			}
			&__content {
				flex-grow: 1;
				padding: 24px 28px 34px;
				position: relative;
				h6 {
					font-family: 'Montserrat';
					font-weight: 700;
					font-size: 14px;
					margin-bottom: 11px;
					text-transform: uppercase;
				}
				p {
					font-family: 'Inter';
					font-weight: 400;
					font-size: 14px;
					line-height: 26px;
				}
				&::before {
					content: '';
					display: block;
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					backdrop-filter: blur(6px);
					z-index: -1;
				}
			}
			&__image-wrapper {
				height: 250px;
				position: relative;
				width: 100%;
				display: block;
				overflow: hidden;
			}
			&__image {
				height: 100%;
				width: inherit;
				display: block;
				transition: transform 0.3s ease;
				transform: translate3d(0,0,0);
				&:hover {
					transform: translate3d(0,0,0) scale(1.1);
				}
			}
		}
		&__action-buttons {
			display: flex;
			justify-content: flex-start;
			position: relative;
			z-index: 1;
			.btn {
		
				&:nth-child(1) {
					padding: 23px 40px;
					margin-right: 20px;
				}
				&.FAQ {
					display: inline-flex;
					min-width: auto;
					align-items: center;
					padding: 7px 8px 7px 23px;
					color: ${colors.buttonBlack};
					border: 1px solid ${colors.buttonBlack};					
					&::after {
						content: none;
					}
					> span {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-left: 10px;
						border-radius: 100%;
						border: 1px solid #000;
						width: 46px;
						height: 46px;
						position: relative;
						overflow: hidden;
						
						&::before {
							content: '';
							display: block;
							border-radius: 50%;
							width: 100%;
							height: 100%;
							position: absolute;
							background-color: ${colors.buttonBlack};
							top: -50px;
							z-index: -1;
							transition: all 0.3s ease;
						}
					}
				}
				&:hover {
					&.FAQ {
						transition: all 0.3s ease;
						> span {
							transition: color 0.3s ease;
							color: #fff;
							&::before {
								top: 0;
								
							}
						}
					}
				}
			}
		}
	}
	@media ${mqMax(breakpoints.xl)} {
		height: auto;
	}
	@media ${mqMax(breakpoints.md)} {
		.content-container {
			margin: 50px auto;
		}
		&::before {
			content: none;
		}
		.benefits {
			
			&__list {
				flex-flow: wrap;
				margin: 0 16px 50px;
				li {
					width: 100%;
					margin-bottom: 30px;
					height: auto;
					img {
						width: 100%;
						height: auto;
					}
				}
			}
			&__action-buttons {
				flex-direction: column;
				align-items: flex-start;
				.btn:first-child {
					margin-bottom: 10px;
				}
			}
		}
	}
	@media ${mqBetween(breakpoints.md, breakpoints.xxl)} {
		.content-container {
				margin: 150px auto;
			}
		.benefits {
			&__list {
				flex-flow: wrap;
				li {
					width: calc(50% - 15px);
					height: auto;
					margin-bottom: 30px;
					img {
						width: 100%;
						height: auto;
					}
				}
			}
		}
	}
`;
