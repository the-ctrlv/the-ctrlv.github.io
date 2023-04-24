import styled from 'styled-components';

import { breakpoints, mqMax } from 'shared';

export const StyledFaq = styled.section`
	color: #fff;
	height: auto;
	position: relative;
	.content-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		&.faq-title-container {
			transition-delay: 0s !important;
		}
	}
	.faq {
		&__pre-title {
			font-weight: 500;
			margin-bottom: 22px;
			display: block;
		}
		&__title-wrapper {
			font-family: 'Montserrat';
			max-width: 320px;
			.section-title {
				margin-bottom: 24px;
			}
		}
		
		&__message {
			max-width: 320px;
			padding-top: 50px;
			border-top: 1px solid #fff;
			&__text {
				display: block;
				margin-bottom: 18px;
			}
		}
		&__list-wrapper {
			display: flex;
			align-self: flex-end;
			position: relative;
		}
		&__list {
			max-width: 600px;
			position: relative;
			bottom: 0;
			right: 0;
			padding: 40vh 0 100px;
		}
		&__background-sticky {
			height: 100vh;
			width: 100%;
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			overflow: hidden;	
		}
		&__sticky-content {
			position: relative;
			width: calc(100% - 600px);
			height: 70vh;

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__scroll-bar {
			height: 100%;
			position: absolute;
			right: 20px;
			top: 0;
			width: 1px;
			background-color: rgba(255, 255, 255, 0.2);
			&__line {
				height: 120px;
				background-color: #fff;
			}
		}
	}
	@media ${mqMax(breakpoints.xl - 1)} {
		padding: 70px 0;
		.faq {
			&__background-sticky {
				position: relative;
				height: auto;
			}
			&__sticky-content {
				align-self: center;
				height: auto;
				width: 100%;
			}
			&__title-wrapper {
				text-align: center;
				max-width: 100%;
				margin-bottom: 70px;
				.section-title {
					padding-bottom: 0;
					border-bottom: none;
					br {
						display: none;
					}
				}
			}
			&__list-wrapper {
				align-self: center;
			}
			&__message {
				text-align: center;
				max-width: 600px;
				width: 100%;
				padding-top: 16px;
				margin: 40px auto 0;
				border-top: 1px solid #fff;
			}
		}
	}
`;
