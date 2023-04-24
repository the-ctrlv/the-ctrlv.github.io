import styled from 'styled-components';

export const StyledLoader = styled.div`
	.loader-container {
		overflow: hidden;
		&:first-of-type {
			margin-bottom: 20px;
		}
	}
	.loader-element {
		transform: translateY(100px);
	}
	.progress-wrapper {
		position: relative;
	}
	.progress-line {
		height: 108px;
		position: absolute;
		bottom: calc(-100% - 80px);
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		width: 1px;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 10px;
		overflow: hidden;
		&__inner {
			position: absolute;
			display: block;
			background-color: #fff;
			width: 100%;
			height: 100%;
			-webkit-animation: progress ease-in-out 2s;
			-moz-animation: progress ease-in-out 2s;
			animation: progress ease-in-out 2s;
		}
		@keyframes progress {
			0% {
				bottom: 100%;
				opacity: 0;
			}
			25% {
				bottom: 60%;
				opacity: 1;
			}
			75% {
				bottom: 40%;
			}
			100% {
				bottom: 0;
			}
		}
	}
	&.hidden {
		opacity: 0;
		pointer-events: none;
	}
`;
