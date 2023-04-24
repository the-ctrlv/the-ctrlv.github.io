import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { urlForImage } from 'lib/sanity';

import { Pagination } from 'swiper';

import { feedbackSlidesQuantity } from 'shared/constants';
import { useWindowResize } from 'shared';

import { useEffect, useState } from 'react';
import { StyledFeedbackSwiper } from './styles';

import 'swiper/swiper-bundle.min.css';

export default function FeedbackSwiper({ testimonials }) {
	const { width } = useWindowResize();
	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		if (typeof window === 'object' && width !== 0) {
			if (width <= 768) {
				swiper?.slideTo(0);
			}
		}
	}, [width]);

	return (
		<StyledFeedbackSwiper
			modules={[Pagination]}
			{...feedbackSlidesQuantity}
			slidesPerView="auto"
			centeredSlides
			onSwiper={(s) => setSwiper(s)}
			initialSlide={1}
			pagination={{ clickable: true }}
			className="feedback-swiper fadeIn"
			data-scroll
		>
			{testimonials.map((testimonial, index) => (
				<SwiperSlide key={index} className="feedback-swiper__slide flex-between">
					<Image
						src={urlForImage(testimonial.image.url)
							.height(1000)
							.width(1000)
							.fit('max')
							.url()}
						width={1000}
						height={1000}
						alt="avatar"
						className="feedback-swiper__avatar"
					/>
					<div className="feedback-swiper__content">
						<p className="feedback-swiper__text">{testimonial.message}</p>
						<div className="feedback-swiper__author">
							<strong>{testimonial.name}</strong>
							<span>{testimonial.profession}</span>
						</div>
					</div>
				</SwiperSlide>
			))}

		</StyledFeedbackSwiper>
	);
}
