import styled from 'styled-components';
import {
	mqMin, breakpoints, colors, mqBetween,
} from 'shared';

export const StyledHeader = styled.header`
	height:	100px;
	padding: 0 16px;
	font-weight: 600;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 10;
	top: -95%;
	transition: top 1s ease-in-out;
	img {
		display: block;
		position: relative;
		z-index: 1080;
	}
	&.visible {
		top: 0;
	}
	.header-wrapper {
		display: flex;
		align-items: center;
		nav {
			margin-right: 80px;
			a {
				padding: 0 25px;
				font-size: 16px;
				font-family: 'Montserrat';
				font-weight: 500;
				display: inline-block;
				color: #fff;
				@media ${mqBetween(breakpoints.xl, 1100)} {
					padding: 0 10px;
				}
			}
		}
		> a {
			&:nth-of-type(1) {
				margin-right: 16px;
			}
		}
	}
	.mobile-menu {
		height: 100vh;
		overflow: hidden;
		width: 100vw;
		position: fixed;
		background-color: #080908;
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateX(100%);
		transition: all 0.5s ease;
		&__wrapper {
			max-width: 295px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 400px;
		}
		&__nav {
			color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;
			a {
				margin-bottom: 45px;
				font-size: 20px;
				font-family: 'Montserrat';
				font-weight: 600;
			}
			
		}
		.btn {
			width: 100%;
			max-width: 200px;
		}
		&__social {
			width: 100%;
			padding: 45px 0 25px;
				border-top: 1px solid #fff;
			justify-content: center;
			a {
				margin: 0 14px;
			}
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			width: 50vw;
			height: 50vw;
			background-color: #AFC2A8;
			transform: translate3d(-50%,-50%,0);
			filter: blur(150px);
			min-width: 500px;
			min-height: 500px;
			z-index: -1;
		}
		&.active {
			transform: translateX(0);
			transition: all 0.5s ease;
		}
	}
	.btn {
		letter-spacing: 1px;
		padding: 16.5px 40px;
		&--outline {
			&::after {
				content: none;
			}
		}
	}
	.right-links {
		text-align: center;
		&:not(.mobile) {
			a {
				margin: 0;
				&:nth-child(1) {
					margin-right: 16px;
				}
			}
			
		}
		&.mobile {
			a {
				margin-bottom: 16px;
				color: #fff;
			}
		}
	}
	.hamburger {
		cursor: pointer;
		width: 45px;
		height: 45px;
		background-color: ${colors.button};
		border-radius: 100%;
		position: absolute;
		top: 50%;
		right: 15px;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		z-index: 1050;
		transition: background-color .3s 0s;
		&__line {
			height: 2px;
			width: 38px;
			border-radius: 100px;
			position: absolute;
			background-color: #fff;
			transition: background-color .3s 0s;
			&:nth-child(1) {
				top: 15px;
				width: 24px;
				left: 50%;
				transition: top .3s .3s, transform .3s;
				transform: translate3d(-50%,0,0);
			}
			&:nth-child(2) {
				top: 50%;
				left: 50%;
				transition: width 0.3s ease;
				transform: translate3d(-50%,-50%,0);
				width: 16px;
			}
			&:nth-child(3) {
				bottom: 15px;
				width: 24px;
				left: 50%;
				transition: bottom 0.3s .3s, transform .3s;
				transform: translate3d(-50%,0,0);
			}
		}
		&.active {
			background-color: #fff;
			transition: background-color .3s 0s;
			.hamburger__line {
				background-color: ${colors.button};
				transition: background-color .3s 0s;
				&:nth-child(1) {
					transform: translate3d(-50%,-50%,0) rotate(45deg);
					top: 50%;
					transition: top .3s,transform .3s .3s,-webkit-transform .3s .3s;
				}
				&:nth-child(2) {
					width: 0;
				}
				&:nth-child(3) {
					transform: translate3d(-50%,50%,0) rotate(-45deg);
					bottom: 50%;
					transition: bottom .3s,transform .3s .3s,-webkit-transform .3s .3s;
				}
			}
		}
	}
	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(8, 9, 8, 0.1);
		backdrop-filter: blur(10px);
		z-index: -1;
	}
	@media ${mqMin(breakpoints.md)} {
		height: 87px;
		padding: 0 25px;
		.hamburger {
			right: 25px;
		}
	}
	@media ${mqMin(breakpoints.xl)} {
		padding: 0 50px;
	}
`;
