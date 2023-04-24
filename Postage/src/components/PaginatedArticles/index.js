/* eslint-disable react/no-array-index-key */
import { useEffect, useRef, useState } from 'react';

import ReactPaginate from 'react-paginate';
// eslint-disable-next-line import/no-extraneous-dependencies
import Highlighter from 'react-highlight-words';

import Image from 'next/image';

import { StyledReactPaginate } from 'shared/styles';
import { getClassNames, useWindowResize } from 'shared';
import Link from 'next/link';

import { StyledArticle, StyledArticleList } from './styles';

function Items({ currentArticles, isBlogContent, isSearchPage, searchWords }) {
	const [reactPaginateHeight, setReactPaginateHeight] = useState(0);
	const reactPaginateRef = useRef(null);
	const { width } = useWindowResize();
	const searchWordsArray = searchWords?.split(',');

	useEffect(() => {
		setTimeout(() => {
			if (width !== 0 && reactPaginateRef.current) {
				setReactPaginateHeight(reactPaginateRef.current.clientHeight);
			}
		}, 100);
	}, [reactPaginateRef, width]);

	return (
		currentArticles && (
			<StyledArticleList className={isSearchPage ? '' : 'fadeIn'} data-scroll>
				<div
					className={getClassNames(
						'article-list',
						isBlogContent && 'for-blog-content',
						isSearchPage && 'for-search-page'
					)}
					ref={reactPaginateRef}
					style={{ minHeight: isSearchPage ? 'auto' : reactPaginateHeight }}
				>
					{currentArticles.length > 0 ?
						currentArticles.map((item, i) => (
							<Link
								key={i}
								href={`/blog/${item.slug}`}
								className={getClassNames(
									'article-link',
									isBlogContent && 'for-blog-content',
									isSearchPage && 'for-search-page'
								)}
							>

								<StyledArticle>
									{isSearchPage ? (
										<>
											<div className="title-container">
												<Highlighter
													highlightClassName="highlighted"
													searchWords={searchWordsArray}
													highlightTag="h3"
													unhighlightTag="h3"
													autoEscape
													textToHighlight={item.title}
												/>
											</div>
											<p className="article-text">{item.text}</p>
										</>
									)
										: (
											<>
												<div className="article-image-wrapper">
													<Image priority src={item.image} alt={item.title} />
													<span className="article-tag">{item.tag}</span>
												</div>
												<h4 className="article-title">{item.title}</h4>
												<p className="article-text">{item.subtitle}</p>
											</>
										)}
								</StyledArticle>
							</Link>
						))
						: (
							<div className="no-results">
								<h3>No results</h3>
							</div>
						)}
				</div>
			</StyledArticleList>
		)
	);
}

export default function PaginatedArticles({
	articlesPerPage,
	isBlogContent,
	filteredArticles,
	isSearchPage,
	searchWords }) {
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + articlesPerPage;
	const reactPaginateRef = useRef(null);
	const currentArticles = filteredArticles.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);
	useEffect(() => {
		setItemOffset(0);
	}, [filteredArticles]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * articlesPerPage) % filteredArticles.length;
		setItemOffset(newOffset);
	};

	return (
		<StyledReactPaginate
			ref={reactPaginateRef}
			className={getClassNames(
				'articles-pagination',
				filteredArticles.length <= articlesPerPage && 'without-nav-bar',
			)}
		>
			<div className="content-container content-container--pagination">
				<Items
					currentArticles={currentArticles}
					isBlogContent={isBlogContent}
					isSearchPage={isSearchPage}
					searchWords={searchWords}
				/>
				<ReactPaginate
					forcePage={itemOffset / articlesPerPage}
					breakLabel="..."
					previousLabel={null}
					nextLabel={null}
					marginPagesDisplayed={1}
					onPageChange={handlePageClick}
					pageCount={pageCount}
					renderOnZeroPageCount={null}
				/>
			</div>
		</StyledReactPaginate>
	);
}
