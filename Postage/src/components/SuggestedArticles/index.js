import PaginatedArticles from '../PaginatedArticles';
import { MOCK_ARTICLES } from '../PaginatedArticles/helpers';

import { StyledArticles } from './styles';

export default function Articles({ isYourArticles }) {
	return (
		<StyledArticles>
			<div className="content-container articles">
				<span className="articles__pre-title fadeIn" data-scroll>
					{isYourArticles ?
						'Your articles'
						: 'Similar articles'}
				</span>
				{isYourArticles ? (
					<h2 className="articles__title section-title fadeIn" data-scroll>
						You’ve already read
					</h2>
				)
					: (
						<h2 className="articles__title section-title fadeIn" data-scroll>
							You should be <span>interested</span>
						</h2>
					)}
				<PaginatedArticles articlesPerPage={4} filteredArticles={MOCK_ARTICLES} />
			</div>
		</StyledArticles>
	);
}
