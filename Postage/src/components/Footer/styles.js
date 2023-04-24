import styled from 'styled-components';

import { mqMax, breakpoints, mqBetween, colors } from 'shared';

export const StyledFooter = styled.footer`
	background-color: #E4E6E5;
	ul {
		padding: 75px 50px 50px;
		align-items: flex-start;
		li {
			&:first-child {
				max-width: 350px;
				img {
					margin-bottom: 20px;
				}
				p {
					line-height: 22px;
				}
			}
			&:nth-child(2) {
				a {
					display: block;
					font-weight: 600;
					text-transform: uppercase;
					font-family: 'Montserrat';
					&:not(:last-child) {
						margin-bottom: 23px;
					}
				}
			}
			&:nth-child(3) {
				.footer-contacts {
					margin-bottom: 20px;
					span {
						display: block;
						color: rgba(7, 6, 15, 0.6);
						margin-bottom: 4px;
					}
					a {
						font-family: 'Montserrat';
						font-weight: 700;
					}
				}
				
				.footer-socials {
					margin-top: 38px;	
					width: 100px;
				}
			}
			&:nth-child(4) {
				width: 350px;
				h6 {
					text-transform: uppercase;
					font-family: 'Montserrat';
					font-weight: 700;
					line-height: 22px;
					font-size: 16px;
					color: rgba(7, 6, 15, 0.8);
				}
			}
		}
	}
	.footer-bottom {
		padding: 20px 50px;
		background-color: #0A070A;
		color: #fff;
		position: relative;
		overflow: hidden;
		p {
			position: relative;
			z-index: 1;
		}
		div {
			position: relative;
			z-index: 1;
			a {
				text-decoration: underline;
				&:first-child {
					margin-right: 65px;
				}
			}
		}
		&::before {
			content: '';
			display: block;
			width: 50vw;
			height: 50vw;
			position: absolute;
			left: 50%;
			top: 0;
			transform: translateX(-50%);
			background-color: ${colors.button};
			filter: blur(150px);
		}
	}

	@media ${mqMax(breakpoints.lg)} {
		ul {
			flex-flow: wrap;
			padding: 32px;
			li {
				width: 100% !important;
				text-align: center;
				max-width: none !important;
				img {
					margin: 0 auto;
				}
				h6 {
					max-width: 350px;
					margin: 0 auto;
				}
				p {
					max-width: 500px;
    			margin: 0 auto;
				}
				&:nth-child(2) {
					margin: 50px 0;
				}
			}
		}
		.footer-socials {
			margin: 25px auto 50px;
		}
		.footer-bottom {
			flex-flow: wrap;
			p {
				text-align: center;
				margin: 0 0 16px;
				line-height: 24px;
				width: 100%;
				span {
					display: block;
				}
			}
			div {
				margin: 0 auto;
				a {
					&:nth-child(1) {
						margin-right: 20px;
					}
				}
			}
		}
	}
	@media ${mqBetween(breakpoints.md, breakpoints.xxl)} {
		ul {
			padding: 50px 72px;
			flex-flow: wrap;
			li {
				&:nth-child(1) {
					width: 100% !important;
					text-align: left;
					max-width: none;
					p {
						max-width: 600px;
						margin: 0;
					}
				}
				&:nth-child(2) {
					margin: 60px 0;
					width: 220px !important;
					text-align: left;
				}
				&:nth-child(3) {
					margin: 60px 0;
					width: auto !important;
					flex-grow: 1;
					.footer-contacts {
						text-align: left;
						span {
							font-size: 16px;
							margin-bottom: 10px;
						}
					}
					.footer-socials {
						margin: 25px 0 50px;
					}
				}
				&:nth-child(4) {
					text-align: left;
					width: 100% !important;
					h6 {
						max-width: none;
						margin-bottom: 20px;
					}
				}
			}
		}
		.footer-bottom {
			p {
				span {
					display: inline-block;
				}
			}
		}
	}
`;
