import styled from 'styled-components'
import { breakpoints, colors } from '../../shared/constants'
import { mqMax } from '../../shared/functions'
export const StyledModal = styled.div`
	& {
		position: fixed;
		height: 100vh;
		width: 100vw;
		pointer-events: none;
		background-color: #fff;
		opacity: 0;
		visibility: hidden;
		z-index: 1080;
		display: flex;
		align-items: center;
		justify-content: center;
		&.visible {
			pointer-events: all;
			opacity: 1;
			visibility: visible;
		}
	}
	.modal {
		&__content {
			max-width: 1100px;
			display: flex;
			position: relative;
			z-index: 1;
			&__text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				span {
					font-size: 32px;
					opacity: 0.5;
					display: block;
					margin-bottom: 8px;
				}
				h1 {
					margin-bottom: 85px;
				}
			}
		}
		&__polygon {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 100vw;
			height: 100vh;
			clip-path: polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%);
			background-color: ${colors.darkBlue};
			opacity: 0.05;
		}
	}
	@media ${mqMax(breakpoints.xl)} {
		.modal {
			&__content {
				flex-direction: column;
				padding: 0 20px;
				img {
					margin-bottom: 16px;
				}
				&__text {
					align-items: center;
					text-align: center;
					span {
						font-size: 18px;
					}
					h1 {
						margin-bottom: 32px;
					}
				}
			}
			&__polygon {
				background-color: ${colors.orange2};
				opacity: 1;
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
		.modal {
			&__content {
				img {
					width: 90%;
					margin: 0 auto 16px;
				}
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
		.modal {
			&__content {
				&__text {
					h1 {
						font-size: 30px;
						line-height: 36px;
					}
				}
			}
		}
	}
`