import { breakpoints, mqMax, mqMin } from 'shared';
import styled from 'styled-components';

export const StyledResearch = styled.section`
	.section-title-wrapper {
		flex-direction: column;
		background-color: #0A070A;
		text-align: center;
		justify-content: flex-end;
		padding: 67px 0;
		h1 {
			color: #fff;
			font-size: 38px;
			top: auto;
			margin-bottom: 20px;
			text-transform: capitalize;
		}
	}
	.search-bar-wrapper {
		position: relative;
		input {
			width: 60vw;
			padding: 20px 40px;
			border: 1px solid #949896;
			background-color: transparent;
			border-radius: 100px;
			color: #fff;
		}
		.btn-wrapper {
			position: absolute;
			right: 41px;
			top: 0;
			height: 100%;
			width: 21px;
			display: flex;
			align-items: center;
			img {
				transition: all 0.3s ease;
			}
			&:hover {
				img {
					transform: scale(1.3);
					transition: all 0.3s ease;
				}
			}
		}
	}
	> .content-container {
		padding: 70px 0 90px;
		&--search {
				@media ${mqMin(breakpoints.xl + 1)} {
					max-width: 900px;
				}
				@media ${mqMax(breakpoints.lg)} {
					padding: 70px 0 60px;
				}
			}
		}
	.results-quantity {
		position: absolute;
		top: 30px;
		left: 0;
		font-family: 'Montserrat';
		text-transform: uppercase;
	}
	@media ${mqMax(breakpoints.lg)} {
		.section-title-wrapper {
			padding: 40px 0;
			h1 {
				font-size: 19px;
				margin-bottom: 10px;
			}
		}
		.search-bar-wrapper {
			input {
				width: 90vw;
				padding: 20px;
			}
			.btn-wrapper {
				right: 20px;
			}
		}
	}
`;
