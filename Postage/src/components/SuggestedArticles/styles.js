import styled from 'styled-components';

import { breakpoints, mqMax } from 'shared';

export const StyledArticles = styled.section`
	padding: 80px 0 60px;
	background-color: #F3F3F3;
	.articles {
		&__title {
			margin-bottom: 50px;
		}
		&__pre-title {
			display: block;
			margin-bottom: 30px;
			font-family: 'Montserrat';
			font-weight: 400;
			font-size: 16px;
			text-transform: uppercase;
		}
		@media ${mqMax(breakpoints.xl - 1)} {
			&__title,
			&__pre-title {
				text-align: center;
			}
		}
	}
`;
