import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledMedications = styled.div`	
	min-height: 100vh;
	background-color: #E4E6E5;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.medications {
		&__title-wrapper {
		margin: 0 auto 130px;
			h2 {
				text-transform: uppercase;
				text-align: center;
				font-family: 'Montserrat';
				font-weight: 700;
				font-size: 50px;
			}
		}
	}
	@media ${mqMax(breakpoints.lg)} {
		padding: 60px 0;
		.medications {
			&::after {
				background-color: #fff;
				top: 20%;
				width: 400px;
				height: 400px;
				filter: blur(150px);
			}
		}
	}	
	@media ${mqMax(breakpoints.md)} {
		.medications {
			&__title-wrapper {
				height: auto;
				h2 {
					font-size: 30px;
				}
			}
		}
	}
`;
