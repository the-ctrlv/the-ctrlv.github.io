import { breakpoints, mqMax } from 'shared';

import styled from 'styled-components';

export const StyledStopActingYourAge = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: wrap;
	padding: 140px 0 120px;
	h3 {
		font-family: 'Montserrat';
		font-size: 55px;
		font-weight: 700;
		width: 100%;
		text-align: center;
		text-transform: uppercase;
		display: block;
		margin-bottom: 30px;
	}

	@media ${mqMax(breakpoints.md)} {
		padding: 80px 0 60px;
		h3 {
			font-size: 30px;
			margin-bottom: 20px;
		}
	}
`;
