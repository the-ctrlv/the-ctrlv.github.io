import { Swiper as SwiperComponent } from 'swiper/react';
import styled from 'styled-components';
import { breakpoints, mqMax } from 'shared';

export const StyledFeedbackSwiper = styled(SwiperComponent)`
	&& {
		margin-bottom: 50px;
		.swiper-pagination {
			display: none;
		}
	}
	.swiper-wrapper {
		align-items: stretch;
	}
	.feedback-swiper {
		align-items: stretch;
		&__slide {
			background-color: #E4E6E5;
			padding: 70px;
			border-radius: 200px;
			height: auto;
		}
		&__avatar {
			width: 225px;
			height: 225px;
			border-radius: 100%;
			margin-right: 20px;
		}
		&__star {
			&.disabled {
				opacity: 0.3;
			}
		}
		&__rating {
			margin-bottom: 23px;
			max-width: 100px;
			display: flex;
			justify-content: space-between
		}
		&__text {
			padding: 22px 0 30px;
			margin-bottom: 10px;
			font-size: 16px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			line-height: 25.6px;
		}
		&__author {
			width: 100%;
			strong {
				display: block;
				font-size: 16px;
				margin-bottom: 5px;
			}
		}
	}
	@media ${mqMax(breakpoints.lg)} {
		.feedback-swiper {
			&__content {
				max-width: 70%;
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
		&& {
			margin-bottom: 0;
			padding-bottom: 60px;
			.swiper-pagination {
				display: block;
				bottom: 15px;
				&-bullet {
					width: 10px;
					height: 10px;
					background-color: #AFB8B3;
					&-active {
						background-color: #798C7F;
					}
				}
			}
		}
		.feedback-swiper {
			&__slide {
				padding: 22px;
				flex-flow: column;
				border-radius: 20px;
			}
			&__avatar {
				margin: 0 0 10px;
				width: 84px;
				height: 84px;
			}
			&__rating {
				margin: 0 auto 20px;
			}
			&__content {
				max-width: none;
			}
			&__text {
				padding: 10px 0;
				margin-bottom: 20px;
			}
			&__author {
				text-align: center;
			}
		}
	}
`;
