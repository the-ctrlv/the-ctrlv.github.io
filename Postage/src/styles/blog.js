import styled from 'styled-components';
import { breakpoints, mqMax } from 'shared';

export const StyledBlog = styled.section`
	background-color: #E4E6E5;
	.section-title-wrapper {
		background: #0A070A;
	}
	.blog-content {
		align-items: stretch;
		padding: 80px 0 100px;
		&__right-pane {
			.article-link {
				display: block;
				width: 100%;
				margin-bottom: 50px;	
			}
		}
	}
	@media ${mqMax(breakpoints.xl - 1)} {
		.blog-content {
			flex-flow: wrap;
			padding: 30px 0 60px;
		}
	}
`;
