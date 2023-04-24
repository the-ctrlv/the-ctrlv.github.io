import styled from 'styled-components';

import contactUsBG from 'assets/images/contact-us-bg.jpg';

export const StyledContactUs = styled.section`
	min-height: 90vh;
	color: #fff;
	padding: 200px 0 110px;
	background: url(${contactUsBG.src}) center center/cover no-repeat;
	.contact-us__pre-title {
			display: block;
			margin-bottom: 20px;
	}
	.section-title {
		margin-bottom: 50px;
	}
`;
