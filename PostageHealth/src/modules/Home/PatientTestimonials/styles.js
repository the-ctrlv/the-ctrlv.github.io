import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledPatientTestimonials = styled.section`
	padding: 120px 0 80px;
	position: relative;
	overflow: hidden;
	.content-container {
		>span {
			text-align: center;
			display: block;
			font-family: 'Montserrat';
			text-transform: uppercase;
			margin-bottom: 20px;
			font-weight: 500;
		}
		h2 {
			text-align: center;
			margin-bottom: 50px;
		}
	}
	.testimonials {
		&__footer {
			font-family: 'Montserrat';
			font-size: 20px;
			text-transform: uppercase;
			text-align: center;
			span {
				display: block;
				margin: 0 15px;
				&:last-child {
					text-align: right;
				}
			}
			&__title {
				max-width: 250px;
			}
			&__line {
				height: 1px;
				width: 30%;
				background-color: rgba(17, 23, 32, 0.2);
			}
		}
		&::after {
			content: '';
			position: absolute;
			transform: translate3d(-50%,-50%,0);
			top: 50%;
			left: 50%;
			width: 650px;
			height: 650px;
			background-color: ${colors.button};
			filter: blur(250px);
			z-index: -1;
		}
	}
	@media ${mqMax(breakpoints.md)} {
		background-color: #e4e6e5a1;
		padding: 70px 0 50px;
		.testimonials {	
			&__footer {
				flex-flow: wrap;
				width: 100%;
				&__line {
					margin: 0 auto 40px !important;
					width: 80% !important;
				}
				&__title {
					margin: 0 auto 40px !important;
				}
				span {
					width: 100%;
					&:first-child {
						margin-bottom: 40px;
					}
				}
			}
		}
	}
`;
