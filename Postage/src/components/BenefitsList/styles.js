import styled from 'styled-components';

import { breakpoints, mqMax } from 'shared';

export const StyledBenefitsList = styled.div`
	.benefits-list {
		max-width: 600px;
		position: relative;
		bottom: 0;
		right: 0;
		padding: 70vh 0 100px;
		&__item {
			margin-bottom: 50px;
			display: flex;
			justify-content: space-between;
			&__circle {
				display: inline-block;
				width: 48px;
				height: 48px;
				border-radius: 50%;
				border: 1px solid #fff;
				margin-right: 20px;
			}
			&__text {
				width: calc(600px - 50px);
			}
			h3 {
				font-family: 'Montserrat';
				font-weight: 700;
				text-transform: uppercase;
				line-height: 19px;
				margin-bottom: 14px;
				position: relative;
			}
			p {
				line-height: 24px;
			}
		}
		&::-webkit-scrollbar {
			display: none;
		}
		@media ${mqMax(breakpoints.lg)} {
			.benefits-list {
				position: relative;
				padding-top: 50px;
				max-width: 600px;
				&__item {
					&__text {
						width: calc(100% - 68px);
						max-width: 430px;
						h3 {
							font-size: 14px;
						}
						p {
							font-size: 14px;
						}
					}
				}
			}
		}
		@media ${mqMax(breakpoints.xl - 1)} {
			padding: 0;
		}
	}
`;
