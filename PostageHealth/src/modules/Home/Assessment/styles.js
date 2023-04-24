import styled from 'styled-components';

import { breakpoints, colors, mqMax } from 'shared';

export const StyledAssessment = styled.section`
	.content-container {
		margin: 200px auto 130px;
		border-radius: 50px;
		padding: 70px 60px;
		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 50px;
			position: absolute;
			top: 0;
			left: 0;
			background:
				linear-gradient(90.02deg, rgba(255, 255, 255, 0.087) -4.27%, rgba(255, 255, 255, 0.1) 105.28%);
			backdrop-filter: blur(35px);
		}
	}
	.content {
		color: #fff;
		position: relative;
		align-items: flex-start;
		z-index: 1;
		margin-bottom: 50px;
		h2 {
			font-family: 'Montserrat';
			font-weight: 600;
			font-size: 38px;
			line-height: 45px;
			margin-right: 20px;
			width: calc(100% - 400px);
			span {
				display: block;
				margin-top: 5px;
				font-weight: 300;
				font-style: italic;
			}
		}
		.bottle {
			position: absolute;
			right: -20px;
			bottom: -30px;
			transform: scale(1.0);
			transition: all 0.3s ease;
		}
	}
	.assessment {	
		&__bottom {
			position: relative;
			z-index: 1;
			align-items: center;
			p {
				color: #fff;
				font-family: 'Montserrat';
				font-weight: 600;
				text-transform: uppercase;	
			}
			.line {
				height: 1px;
				background-color: #fff;
				flex-grow: 1;
				display: block;
				margin: 0 30px;
			}
			.btn {
				width: 28vw;
				max-width: 350px;
				min-width: 282px;
				padding: 21px 20px;
			}
		}
	}
	@media ${mqMax(breakpoints.xl)} {
		.content-container {
			padding: 40px 20px;
			margin: 200px auto 60px;
			position: relative;
		}
		.content {
			flex-direction: column-reverse;
			margin-bottom: 0;
			h2 {
				width: 100%;
				margin: 0;
				font-size: 19px;
				line-height: 22.4px;
				text-align: center;
			}
			.bottle {
				position: relative;
				bottom: auto;
				right: auto;
				transform: translateY(-50%);
				margin: 0 auto -120px auto;
				width: 100%;
				height: auto;
			}
		}
		.assessment {	
			&__ellipse-mob-container {
				position: absolute;
				overflow: hidden;
				height: 100%;
				width: 100%;
				left: 0;
				top: 0;
				border-radius: 50px;
				z-index: -1;
				&::after {
					content: '';
					display: block;
					height: 213px;
					width: 213px;
					background-color: ${colors.button};
					position: absolute;
					right: 0;
					top: 0;
					transform: translate3d(50%,-50%,0);
					border-radius: 50%;
					filter: blur(100px);
				}
			}
			
			&__bottom {
				flex-direction: column;
				text-align: center;
				.line {
					width: 72px;
					margin: 30px 0;
					display: inline-flex;
					order: -1;
				}
				.btn {
					max-width: none;
					width: 100%;
				}
				p {
					margin-bottom: 20px;
					max-width: 300px;
					line-height: 19px;
				}
			}
		}
	}
`;
