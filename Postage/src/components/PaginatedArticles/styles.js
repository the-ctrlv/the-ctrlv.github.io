import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledArticleList = styled.div`
	.article-list {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		margin-bottom: 30px;
		gap: 25px;
		&.for-blog-content {
			flex-flow: wrap;
		}
		&.for-search-page {
			flex-flow: wrap;
			margin-bottom: 0;
			gap: 0;
			
			.article-link {
				width: 100%;
				border-bottom: 1px solid rgba(0, 0, 0, 0.2);
				margin-bottom: 50px;
				.title-container {
					margin-bottom: 30px;
					h3 {
						margin-bottom: 0;
						display: inline;
						&.highlighted {
							background-color: #AFC2A8;
							border-radius: 100px;
							padding: 0 10px;
						}
					}	
				}
				h3 {
					font-family: 'Montserrat';
					font-weight: 600;
					font-size: 30px;
					text-decoration: underline;
					margin-bottom: 30px;
				}
				.article-text {
					margin-bottom: 40px;
				}
			}
		}
		.article-link {
			list-style: none;
			width: calc(25% - 17px);
			position: relative;
			&.for-blog-content {
				width: calc(33.333% - 25px);
				margin-bottom: 22px;
			}
		}
		@media ${mqMax(breakpoints.xl - 1)} {
			flex-flow: wrap;
			margin-bottom: 50px;
			gap: 16px;
			.article-link {
				width: calc(50% - 8px);
				margin-bottom: 40px;
			}
		}
		@media ${mqMax(breakpoints.md)} {
			&.for-search-page {
				.article-link {
					margin-bottom: 30px;
					.title-container {
						margin-bottom: 16px;
					}
					h3 {
						font-size: 18px;
						line-height: 25.2px;
						
					}
					.article-text {
						-webkit-line-clamp: 5;
						margin-bottom: 30px;
					}
				}
			}
			.article-link {
				width: 100%;
				margin-bottom: 50px;
				&.for-blog-content {
					width: 100%;
					margin-bottom: 20px;
				}
			}
		}
	}
	.no-results {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Montserrat';
		font-weight: 600;
		font-size: 16px;
	}
`;

export const StyledArticle = styled.div`
	.article-image-wrapper {
		border-radius: 25px;
		overflow: hidden;
		position: relative;
		margin-bottom: 20px;
		transform: translate3d(0,0,0);
		img {
			width: 100%;
			height: auto;
		}
	}
	.article-tag {
		position: absolute;
		right: 10px;
		top: 10px;
		padding: 10px 20px;
		font-family: 'Montserrat';
		font-weight: 600;
		font-size: 12px;
		background: rgba(243, 243, 243, 0.8);
		border-radius: 100px;
	}
	.article-title {
		font-family: 'Montserrat';
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 10px;
		line-height: 20px;
	}
	.article-text {
		line-height: 22.4px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
