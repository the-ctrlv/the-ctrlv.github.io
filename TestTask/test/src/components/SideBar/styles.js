import styled from 'styled-components'
import { breakpoints, colors } from '../../shared/constants'
import { mqMax } from '../../shared/functions'

export const StyledSideBar = styled.div`
	max-width: 376px;
	width: 100%;
	.side-bar {
		background-color: ${colors.white};
		display: flex;
		align-items: center;
		height: 100vh;
		z-index: 1040;
		&__container {
			width: 100%;
			display: flex;
			flex-direction: column-reverse;
		}
		&__item {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			user-select: none;
			height: 40px;
			margin-bottom: 8px;
			&--active {
				color: ${colors.white};
				svg {
					path {
						stroke: ${colors.lightBlue};
						&:nth-child(3) {
							fill: ${colors.lightBlue};
						}
					}
				}
			}
			&--inactive {
				opacity: 0.5;
				pointer-events: none;
			}
			h4 {
				margin: 0;
				position: relative;
				z-index: 1;
			}
			svg {
				left: 50%;
				top: 50%;
				transform: translate3d(-50%,-50%,0);
				position: absolute;
				width: 100%;
			}
		}
	}
	
	.hamburger {
		cursor: pointer;
		width: 45px;
		height: 45px;
		background-color: ${colors.button};
		border-radius: 100%;
		position: fixed;
		top: 24px;
		right: 24px;
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
			background-color: ${colors.black100};
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
	@media ${mqMax(breakpoints.xl)} { 
		width: 0;
		.side-bar {
			position: fixed;
			right: -100%;
			width: 376px;
			top: 0;
			transition: all .3s 0s;
			&.active {
				right: 0;
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
		.hamburger {
			top: 10px;
			right: 10px;
		}
		.side-bar {
			width: 100vw;
		}
	}
	@media ${mqMax(breakpoints.md)} {
		.side-bar {
			&__item {
				height: 30px;
			}
		}
	}
`