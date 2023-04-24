import styled from 'styled-components';

export const StyledAccordion = styled.li`
	&& {
		margin-bottom: 30px;
	}
	.accordion {
		&__header {
			align-items: center;
			padding-bottom: 30px;
			transition: all 1s ease;
			position: relative;
			p {
				font-weight: 500;
				margin-right: 15px;
			}
			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 0.5px;
				background-color: #fff;
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: 1;
				transition: all 0.5s ease;
				transform-origin: right;
			}
			&:hover {
				cursor: pointer;
				.accordion__icon {
					background-color: #fff;
				}
				svg {
					path {
						fill: #000;
					}
				}
			}
		}
		&__icon {
			width: 32px;
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #fff;
			border-radius: 50%;
			svg {
				width: 12px;
				height: 8px;
				display: block;
				transition: all 0.3s ease;
				transform: rotate(0);
				display: block;
			}
		}
		&__answer {
			max-height: 0;
			overflow: hidden;
			transition: all 0.5s ease;
			border-radius: 0px 0px 25px 25px;
			transform: translate3d(0, 0, 0);
			
			p {
				backdrop-filter: blur(10px);
				background-color: rgba(255, 255, 255, 0.2);
				line-height: 24px;
				padding: 24px 24px 30px;
			}
		}
	}
	&.active {	
		.accordion__header {
			&::after {
				width: 0;
				transition: all 0.5s ease;
			}
		}
		.accordion__icon {
			svg {
				transform: rotate(180deg);
				transition: all 0.3s ease;
			}
		}
		.accordion__answer {
			max-height: 1000px;
			transition: all 0.5s ease;
		}
	}
`;
