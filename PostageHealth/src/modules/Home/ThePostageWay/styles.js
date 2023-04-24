import { breakpoints, mqBetween, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledThePostageWay = styled.section`
	.content-container {
		margin: 160px auto 88px;
		color: #091417;
		> span {
			font-family: 'Montserrat';
			font-weight: 600;
			display: block;
			margin-bottom: 20px;
		}
		h2 {
			font-family: 'Montserrat';
			font-weight: 700;
			font-size: 50px;
			text-transform: uppercase;
			line-height: 70px;
		}
	}
	.postage-way {
		&__title-wrapper {
			margin-bottom: 70px;
			align-items: flex-end;
			h2 {
				line-height: 1 !important;
			}

			.line {
				height: 1px;
				flex-grow: 1;
				margin: 0 30px;
				background-color: #B0B6B4;
			}
			p {
				max-width: 277px;
				line-height: 22.4px;
			}
		}
		&__benefits {
			margin-bottom: 50px;
			align-items: stretch;
			li {
				width: calc(33% - 15px);
				background: #E4E6E5;
				backdrop-filter: blur(35px);
				border-radius: 25px;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
			&__content {
				padding: 30px;
				h5 {
					font-family: 'Montserrat';
					font-size: 14px;
					margin-bottom: 15px;
					text-transform: uppercase;
					line-height: 20px;
				}
				p {
					line-height: 22.4px;
				}
			}
			&__image-wrapper {
				height: 207px;
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
		&__btn-wrapper {
			display:flex;
			justify-content: center;
		}
	}
	
	@media ${mqMax(breakpoints.md)} {
		.content-container {
			margin: 50px auto;
			h2 {
				font-size: 30px;
				line-height: 39px !important;
			}
		}
		.postage-way {
			&__title-wrapper {
				flex-direction: column;
				align-items: flex-start;
				
				.line {
					background-color: #07060F;
					margin: 29px 0 20px;
					width: 87px;
				}
				p {
					max-width: none;
				}
			}
			&__benefits {
				flex-flow: wrap;
				margin: 0 16px 50px;
				li {
					width: 100%;
					img {
						width: 100%;
    				height: auto;
					}
					&:not(:last-child) {
						margin-bottom: 30px;
					}
				}
			}
		}
	}
	@media ${mqBetween(breakpoints.md, breakpoints.xxl)} {
		.postage-way {
			&__benefits {
				flex-flow: wrap;
				justify-content: center;
				li {
						width: 100%;
						flex-direction: row;
						margin-bottom: 30px;
						min-height: 300px;
				}
				&__content {
					width: calc(100% - 30%);
				}
				&__image-wrapper {
					height: auto;
				}
			}
		}
	}
`;
