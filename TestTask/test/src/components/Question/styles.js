import styled from 'styled-components';
import { breakpoints, colors } from '../../shared/constants';
import { mqMax } from '../../shared/functions';


export const StyledQuestion = styled.div`
	width: calc(100vw - 376px);
	padding: 12vh 6vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	h2 {
		max-width: 650px;
	}
	ul {
		padding: 0;
		width: 100%;
		display: flex;
		flex-flow: wrap;
		max-width: 800px;
	}
	@media ${mqMax(breakpoints.xl)} {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	@media ${mqMax(breakpoints.md)} {
		padding: 20vh 0 20px;
		h2 {
			padding: 0 20px;
			text-align: center;
		}
	}
`

export const StyledQuestionButton = styled.li`
	width: 50%;
	margin-bottom: 32px;
	list-style: none;
	position: relative;
	cursor: pointer;
	svg {
		width: 100%;
		height: auto;
	}
	span {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%,-50%,0);
		z-index: 1;
	}
	&:hover {
		svg {
			path {
				stroke: ${colors.midBlue};
				&:nth-child(3) {
					fill: ${colors.white};
				}
			}
		}
	}
	&.disabled {
		pointer-events: none;
	}
	&.selected {
		svg {
			path {
				stroke: ${colors.orange};
				&:nth-child(3) {
					fill: ${colors.orange2};
				}
			}
		}
	}
	&.correct {
		svg {
			path {
				stroke: ${colors.green};
				&:nth-child(3) {
					fill: ${colors.green2};
				}
			}
		}
	}
	&.incorrect {
		svg {
			path {
				stroke: ${colors.red};
				&:nth-child(3) {
					fill: ${colors.red2};
				}
			}
			
		}
	}
	@media ${mqMax(breakpoints.md)} {
		width: 100%;
		margin-bottom: 4px;
		font-size: 14px;
	}
`