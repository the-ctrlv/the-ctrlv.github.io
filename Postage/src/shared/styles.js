import styled, { createGlobalStyle } from 'styled-components';

import mouseIcon from 'assets/icons/mouse.svg';
import arrowIcon from 'assets/icons/icon-pagination-arrow.svg';

import { breakpoints, mqMax, colors } from 'shared';

// Inter
import InterBoldWOFF from 'assets/fonts/Inter-Bold.woff';
import InterBoldTTF from 'assets/fonts/Inter-Bold.ttf';

import InterRegularWOFF from 'assets/fonts/Inter-Regular.woff';
import InterRegularTTF from 'assets/fonts/Inter-Regular.ttf';

// Montserrat

import MontserratBoldWOFF from 'assets/fonts/Montserrat-Bold.woff';
import MontserratBoldWOFF2 from 'assets/fonts/Montserrat-Bold.woff2';

import MontserratRegularWOFF from 'assets/fonts/Montserrat-Regular.woff';
import MontserratRegularWOFF2 from 'assets/fonts/Montserrat-Regular.woff2';

import MontserratSemiBoldWOFF from 'assets/fonts/Montserrat-SemiBold.woff';
import MontserratSemiBoldWOFF2 from 'assets/fonts/Montserrat-SemiBold.woff2';

import MontserratMediumWOFF from 'assets/fonts/Montserrat-Medium.woff';
import MontserratMediumWOFF2 from 'assets/fonts/Montserrat-Medium.woff2';

import MontserratExtraLightItalicWOFF from 'assets/fonts/Montserrat-ExtraLightItalic.woff';
import MontserratExtraLightItalicWOFF2 from 'assets/fonts/Montserrat-ExtraLightItalic.woff2';

export const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		font-family: 'Inter';
		cursor: url(${mouseIcon.src}) 18 18, auto;
		font-weight: 400;
		font-size: 14px;
		height: 100%;
		width: 100%;
		background-color: #F5F5F5;
		color: ${colors.black};
		&::-webkit-scrollbar {
			width: 0;
		}
	}
	main {
		overflow: hidden;
		display: flex;
    flex-direction: column;
	}
	input, textarea {
		outline: none;
		&:focus {
			outline: none;
		}
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
	}
	img {
		transform: translate3d(0,0,0);
		will-change: transform;
	}
	ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
		}
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	strong {
		font-weight: 700;
	}

	p {
		margin: 0;
	}

	* {
		box-sizing: border-box;
	}
	
	.flex-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.section-title {
		font-size: 50px;
		font-family: 'Montserrat';
		font-weight: 700;
		text-transform: uppercase;
		line-height: 70px;
		span {
			font-weight: 300;
			font-style: italic;
		}
		@media ${mqMax(breakpoints.md)} {
			font-size: 30px;
			line-height: 36px;
		}
	}
	.section-title-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400px;
		color: #fff;
		h1 {
				position: relative;
				top: 40px;
		}
	}
	.fadeIn {
		opacity: 0;
		transform: translateY(60px);
		transition: 
		opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		transition-delay: 0s, 0s;
		transition-delay: .3s;
		
		&.is-inview {
			opacity: 1;
			transform: none;
		}
	}
	.content-start {
		transform: translateY(60px);
		opacity: 0;
		&--horizontal {
			opacity: 0;
			transform: translateX(-60px);
		}
	}
	.mouse-follow-container {
		position: relative;
	}
	.mouse-follow {
		position: relative;
		z-index: 1;
		overflow: hidden;
		background-color: #0A070A;
		&__wrapper {
			height: 100%;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			pointer-events: none;
		}
		&__circle {
				background-color: #92A097;
				filter: blur(200px);
				border-radius: 50%;
				position: absolute;
				z-index: 1;
				width: 45vw;
				height: 45vw;
				display: flex;
				justify-content: center;
				align-items: center;
				transform: translate3d(-50%,-50%,0);

				svg {
					width: 8px;
					height: 16px;
					display: inline-block;
					transition: all 0.3s ease;
					transform: rotate(180deg);
				}
				&--left {
					svg {
						transform: rotate(360deg);
						transition: all 0.3s ease;
					}
				}
			}
		&--light {
				background-color: #f3f3f3;
		}
		&--medications {
			background-color: #BDC3BF;
			.mouse-follow__circle {
				background-color: #fff;
			}
		}
	}
	.mobile-blur {
		@media ${mqMax(breakpoints.xl)} {
			&::after {
				content: '';
				position: absolute;
				transform: translate3d(-50%,-50%,0);
				top: 50%;
				left: 50%;
				width: 650px;
				height: 650px;
				background-color: ${colors.button};
				filter: blur(350px);
				z-index: -1;
			}
		}
	}
	.scroll-down {
		position: absolute;
		left: 50%;
		transform: translate3d(-50%, 60px, 0);
		top: 0;
		display: flex;
		flex-flow: column;
		align-items: center;
		height: 100%;
		&__line {
			height: 115px;
			width: 1px;
			margin-bottom: 10px;
			background-color: rgba(255, 255, 255, 0.2);
			position: relative;
			border-radius: 10px;
			overflow: hidden;
			&__inner {
				position: absolute;
				top: -100%;
				display: block;
				background-color: #fff;
				width: 100%;
				height: 100%;
				-webkit-animation: scrollDown ease-in-out 2s infinite;
				-moz-animation: scrollDown ease-in-out 2s infinite;
				animation: scrollDown ease-in-out 2s infinite;
			}
			@keyframes scrollDown {
				0% {
					opacity: 0;
				}
				50% {
					opacity: 1;
					top: 0;
				}
				100% {
					top: 100%;
					opacity: 0;
				}
			}
		}
		&__text {
			transform: rotate(90deg);
			display: flex;
			align-items: center;
			height: 77px;
			white-space: nowrap;
		}
		@media ${mqMax(breakpoints.xxl)} {
			left: 0;
			transform: translateX(0);
		}
	}
	.left-nav-pane {
		width: 250px;
		li {
			h2 {
				font-family: 'Montserrat';
				font-weight: 600;
				font-size: 16px;
				text-transform: uppercase;
				margin-bottom: 24px;
				width: 100%;
				position: relative;
				padding: 7px 0;
				overflow: hidden;
				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 100%;
					width: 2px;
					height: 100%;
					background-color: #798C7F;
				}
			}
			&.active {
				h2 {
					background-color: #E4E6E5;
					padding-left: 20px;
					&::before {
						top: 0;
					}
				}
			}
		}
	}
	.right-nav-pane {
		width: calc(100% - 250px);
		padding-left: 50px;
		@media ${mqMax(breakpoints.xl - 1)} {
			width: 100%;
			padding: 0;
		}
	}
	.hero {
		color: #fff;
		position: relative;
		height: 100vh;
		overflow: hidden;
	}
	.marquee {
		width: 100vw;
		height: 70px;
		padding: 23px 33px;
		display: flex;
		flex-flow: nowrap;
		color: #fff;
		.marquee__wrapper {
			display: flex;
			flex-flow: nowrap;
			justify-content: flex-start;
			-webkit-animation: scroll linear 30s infinite;
			-moz-animation: scroll linear 30s infinite;
			animation: scroll linear 30s infinite;
			span {
				user-select: none;
			}
		}	  

		@-moz-keyframes scroll { 
			from {
						transform: translate3d(0,0,0)
			}
			to {
					transform: translate3d(-100%,0,0)
			}
		}

		@-webkit-keyframes scroll { 
			from {
						transform: translate(0,0)
				}
				to {
						transform: translate(-100%,0)
				}
		}

		@keyframes scroll {
				from {
						transform: translate(0,0)
				}

				to {
						transform: translate(-100%,0)
				}
		}

		span {
			font-family: 'Montserrat';
			font-style: italic;
			font-weight: 400;
			font-size: 20px;
			margin-right: 35px;
			white-space: nowrap;
			text-transform: uppercase;
			span {
				font-weight: 700;
				font-style: normal;
				margin-left: 5px;
			}
		}
	}
	h1 {
		font-size: 55px;
		text-transform: uppercase;
		line-height: 66px;
		
		font-family: 'Montserrat';
		font-weight: 700;
		span {
			font-weight: 300;
			font-style: italic;
		}
		@media ${mqMax(breakpoints.md)} {
			font-size: 30px;
			line-height: 36px;
		}
	}
	

	.btn {
		padding: 22.5px 40px;
		font-family: 'Montserrat';
		text-align: center;
		position: relative;
		overflow: hidden;
		color: #fff;
		font-size: 14px;
		border: 1px solid ${colors.black};
		font-weight: 600;
		cursor: pointer;
		border: none;
		background: linear-gradient(-45deg, #798B8C, #A0B39D);
		background-size: 200% 200%;
		border-radius: 100px;
		display: inline-block;
		text-transform: uppercase;
		animation: gradient 2s ease infinite;
		min-width: 225px;
		@media ${mqMax(breakpoints.md)} {
			padding: 17px 30px;
			min-width: 220px;
		}
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 0%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		&--black {
			background: none;
			background-color: ${colors.buttonBlack};
		}
		&[disabled] {
			opacity: .5;
		}
		.title-wrapper {
			height: 17px;
			overflow: hidden;
			span {
				display: block;
				transform: translateY(-100%);
				transition: transform .3s;
				white-space: nowrap;
			}
		}
		&:hover {
			box-shadow: 30px 30px 60px rgba(37, 91, 121, 0.15);
			transition: all .3s;
			.title-wrapper {
				span {
					transform: translateY(0%);
					transition: transform .3s;
				}
			}
		}
		&--outline {
			background: transparent;
			border: 1px solid #fff;
			color: #fff;
		}
	}

	.content-container {
		width: 100%;
		position: relative;
		max-width: 1170px;
		margin: 0 auto;
		@media (min-width: 700px) and (max-width: 1200px) {
			max-width: calc(100vw - 64px);
		}
		@media ${mqMax(breakpoints.md)} {
			width: calc(100vw - 32px);
		}
		&--contact {
			max-width: 800px;
			text-align: center;
			@media (min-width: 700px) and (max-width: 992px) {
				max-width: calc(100vw - 64px);
			}
		}
	}
	// Inter font

	@font-face {
		font-family: 'Inter';
		src: url(${InterBoldWOFF}) format('woff'),
			url(${InterBoldTTF}) format('ttf');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Inter';
		src: url(${InterRegularWOFF}) format('woff'),
			url(${InterRegularTTF}) format('ttf');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}

	// Montserrat

	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratBoldWOFF}) format('woff'),
			url(${MontserratBoldWOFF2}) format('woff2');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratRegularWOFF}) format('woff'),
			url(${MontserratRegularWOFF2}) format('woff2');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratSemiBoldWOFF}) format('woff'),
			url(${MontserratSemiBoldWOFF2}) format('woff2');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratMediumWOFF}) format('woff'),
			url(${MontserratMediumWOFF2}) format('woff2');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratExtraLightItalicWOFF}) format('woff'),
			url(${MontserratExtraLightItalicWOFF2}) format('woff2');
		font-weight: 300;
		font-style: italic;
		font-display: swap;
	}
	
`;

export const StyledReactPaginate = styled.div`
	margin: 0 auto;
	width: 100%;
	.content-container {
		&--pagination {
			@media ${mqMax(breakpoints.xl - 1)} {
				flex-direction: column !important;
			}	
		}
	}
	ul[role='navigation'] {
		display: flex;
		justify-content: center;
		li {
			a {
				font-family: 'Montserrat';
				font-size: 16px;
				font-weight: 600;
				width: 28px;
				height: 28px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			&.selected {
				border-radius: 50%;
				border: 1px solid #fff;
			}
			&.previous,
			&.next {
				display: none;
			}
		}
	}
	&.articles-pagination {
		ul[role='navigation'] {
			align-items: center;
			li {
				&.selected {
					background-color: rgba(121, 140, 127, 0.1);
					color: #798C7F;
					border: none;
				}
				&.previous,
				&.next {
					display: flex;
					width: 32px;
					margin: 0 15px;
					border-radius: 100%;
					height: 32px;
					background-color: #798C7F;
					position: relative;
					a {
						display: block;
						width: 100%;
						height: 100%;
						z-index: 1;
					}
					&::after {
						content: '';
						width: 10px;
						height: 10px;
						background: url(${arrowIcon.src}) center center/contain no-repeat;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
				}
				&.next {
					&::after {
						transform: translate(-50%, -50%) rotate(-180deg);
					}
				}
			}
		}
	}
	&.without-nav-bar {
		ul[role='navigation'] {
			display: none;
		}
	}
`;
