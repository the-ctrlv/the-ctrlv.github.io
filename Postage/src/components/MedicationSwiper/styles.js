import { Swiper as SwiperComponent } from 'swiper/react';

import styled from 'styled-components';
import { breakpoints, colors, mqMax } from 'shared';

export const StyledMedicationSwiper = styled(SwiperComponent)`
	& {
		overflow: visible;
		width: 100vw;
		&:hover {
			cursor: none;
		}
	}
	.medication-swiper {
		
		&__slide {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: rgba(255, 255, 255, 0.4);
			backdrop-filter: blur(35px);
			border-radius: 25px;
			height: 263px;
			user-select: none;
			
			img {
				position: absolute;
				left: 50%;
				top: -150px;
				transform: translateX(-50%) scale(1.0);
				transition: .3s ease-in-out;
				&:hover {
					transform: translateX(-50%) scale(1.2);
				}
			}
			h6 {
				position: absolute;
				bottom: 40px;
				font-size: 22px;
				font-family: 'Montserrat';
				font-weight: 600;
			}
		}
		@media ${mqMax(breakpoints.lg)} {
			&__slide {
				backdrop-filter: blur(0);
			}
		}
	}
	.mouse-follow-wrapper {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 999;
		pointer-events: none;
	}
	.arrow-wrapper {
		width: 70px;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		background-color: ${colors.button};
		transform: translate3d(-50%,-50%,0);
		
		border-radius: 100%;
		svg {
			transform:  rotate(180deg);
			transition: .3s ease-in-out;
		}
		&--left {
			transform: translate3d(-50%,-50%,0);
			svg {
				transform:  rotate(0deg);
				transition: .3s ease-in-out;
			}
		}
	}
`;
