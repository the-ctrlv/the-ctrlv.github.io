import placeholderArticleBG from 'assets/images/privacy-terms-bg.jpg';
import { breakpoints, mqMax, mqMin } from 'shared';
import styled from 'styled-components';

export const StyledSingleArticle = styled.section`
	.section-title-wrapper {
		background: url(${placeholderArticleBG.src}) center center/cover no-repeat;
	}
	.article-content {
		background-color: #E4E6E5;
		padding: 60px 0 70px;
		.content-container {
			&--single-article {
				@media ${mqMin(breakpoints.xl + 1)} {
					max-width: 900px;
				}
			}
		}
		h2 {
			font-family: 'Montserrat';
			font-size: 30px;
			font-weight: 600;
			line-height: 42px;
		}
		p {
			margin: 30px 0 50px;
			line-height: 22.4px;
		}
		&__image {
			display: block;
			width: 100%;
			height: auto;
			border-radius: 25px;
			overflow: hidden;
		}
		&__image-caption {
			display: block;
			text-align: center;
			margin: 16px 0 50px;
		}
		&__text-content {
			align-items: center;
			@media ${mqMax(breakpoints.lg)} {
				flex-flow: wrap;
			}
			>div {
				width: 47%;
				@media ${mqMax(breakpoints.lg)} {
					width: 100%;
					&:first-child {
						margin-bottom: 30px;
					}
				}
				p {
					margin: 0;
				}
			}
		}
		&__tags {
			display: flex;
			flex-flow: wrap;
			&__core {
				padding: 8px 20px;
				border-radius: 100px;
				background-color: #CED2CF;
				margin: 0 8px 16px 0;
				&.active {
					background-color: #ABB8AF;
				}
			}
		}
	}
	@media ${mqMax(breakpoints.lg)} {
		.article-content {
			padding: 40px 0 60px;
			h2 {
				&:not(.one-size) {
					font-size: 18px;
					line-height: 25.5px;
				}
			}
			&__image-caption {
				margin: 10px 0 30px;
			}
		}
	}		
`;
