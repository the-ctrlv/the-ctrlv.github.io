import styled from 'styled-components';

import privacyTermsBG from 'assets/images/privacy-terms-bg.jpg';
import { breakpoints, mqMax } from 'shared';

export const StyledPrivacyTerms = styled.section`
	.section-title-wrapper {
		background: url(${privacyTermsBG.src}) center center/cover no-repeat;
	}
	.terms-content {
		margin: 60px auto 100px;
		align-items: stretch;
		&__right-pane {
			border-left: 1px solid  #E4E6E5;
			h2 {
				font-family: 'Montserrat';
				font-weight: 700;
				font-size: 30px;
				line-height: 42px;
				margin-bottom: 30px;
			}
			h3 {
				font-size: 16px;
				font-weight: 600;
				margin-bottom: 20px;
				line-height: 25.6px;
			}
			p {
				line-height: 22.4px;
			}
			>p, ol {
				margin-bottom: 40px;
			}
			ol {
				li {
					position: relative;
					list-style: none;
					margin-bottom: 15px;
					&::before {
						content: '';
						position: absolute;
						left: -20px;
						top: 50%;
						transform: translateY(-50%);
						width: 8px;
						height: 8px;
						border-radius: 50%;
						background-color: #798C7F;
					}
				}
				&.orange {
					li {
						&::before {
							background-color: #C57C5D;
						}
					}
				}
			}
		}
	}
	@media ${mqMax(breakpoints.xl - 1)} {
		.terms-content {
			flex-flow: wrap;
			margin: 30px auto 60px;
			max-width: 500px;
			&__right-pane {
				width: 100%;
				padding: 0;
				border: none;
				h2 {
					font-size: 18px;
					line-height: 25.2px;
					margin-bottom: 16px;
				}
				h3 {
					font-size: 16px;
				}
				ol {
					padding-inline-start: 20px;
				}
			}
		}
	}
`;
