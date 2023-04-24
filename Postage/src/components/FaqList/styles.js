import styled from 'styled-components';

import { breakpoints, mqMax } from 'shared';

export const StyledFaqList = styled.div`
	max-width: 600px;
	margin: 0;
	align-self: flex-end;
	padding-top: 15vh;
	width: 100vw;
	&.content-container {
		&--list {
			align-items: flex-end;
		}
	}
	.faq-list {
		position: relative;
		bottom: 0;
		right: 0;
		padding-bottom: 100px;
		z-index: 10;
		&::-webkit-scrollbar {
			display: none;
		}
		@media ${mqMax(breakpoints.lg)} {
			.full-package-list {
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
	@media ${mqMax(breakpoints.xl - 1)} {
		align-self: center;
		padding-top: 0;
	}
`;
