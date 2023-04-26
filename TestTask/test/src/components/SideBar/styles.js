import styled from 'styled-components'
import { colors } from '../../shared/constants'

export const StyledSideBar = styled.div`
	&& {
		max-width: 376px;
		width: 100%;
		background-color: ${colors.white};
		display: flex;
		flex-direction: column-reverse;
	}
	.side-bar {
		
		&__item {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 40px;
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
`