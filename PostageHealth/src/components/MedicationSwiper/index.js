import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import ReactHoverObserver from 'react-hover-observer';

import { useMousePosition, getClassNames, useWindowResize } from 'shared';

import { medicationSlidesQuantity } from 'shared/constants';

import { StyledMedicationSwiper } from './styles';

import 'swiper/swiper-bundle.min.css';

export default function MedicationsSwiper({ medications }) {
	const [swiper, setSwiper] = useState(null);
	const [isTabletMode, setIsTabletMode] = useState(false);
	const hoverTarget = useRef(null);
	const [isMouseHover, setIsMouseHover] = useState(false);
	const [deviceWidth, setDeviceWidth] = useState(0);
	const { currentX, currentY } = useMousePosition(isMouseHover, hoverTarget);
	const [randomMousePosition, setRandomMousePosition] = useState({ randomX: null, randomY: null });
	const { width } = useWindowResize();
	useEffect(() => {
		if (typeof window === 'object' && width !== 0) {
			setDeviceWidth(window.innerWidth);
			setIsTabletMode(width <= 1024);
			if (width <= 1024) {
				swiper?.slideTo(0);
			}
		}
	}, [width]);

	useEffect(() => {
		if (!isMouseHover) {
			setRandomMousePosition({
				randomX: hoverTarget.current.clientWidth * Math.random(),
				randomY: hoverTarget.current.clientHeight * Math.random(),
			});
		}
	}, [isMouseHover]);

	const handleSlideChange = () => {
		if (!isTabletMode) {
			if (deviceWidth / 2 < currentX) {
				swiper.slideNext();
			} else {
				swiper.slidePrev();
			}
		}
	};

	return (
		<ReactHoverObserver
			onMouseLeave={() => setIsMouseHover(false)}
			onMouseOver={() => setIsMouseHover(true)}
		>
			<StyledMedicationSwiper
				{...medicationSlidesQuantity}
				centeredSlides
				slidesPerView="auto"
				ref={hoverTarget}
				spaceBetween={20}
				initialSlide={1}
				onSwiper={(s) => {
					setSwiper(s);
				}}
				pagination={{ clickable: true }}
				className="medication-swiper fadeIn"
				data-scroll
				onClick={() => handleSlideChange()}
			>
				{medications.map((slide, index) => (
					<SwiperSlide key={index} className="medication-swiper__slide">
						<Image
							priority
							src={slide.image.url}
							alt="avatar"
							className="medication-swiper__image"
							width={slide.image.metadata.dimensions.width}
							height={slide.image.metadata.dimensions.height}
						/>
						<h6 className="medication-swiper__title">{slide.title}</h6>
					</SwiperSlide>
				))}
				{!isTabletMode && (
					<div className="mouse-follow-wrapper mouse-follow-wrapper--grey">
						<div
							className={getClassNames(
								'arrow-wrapper',
								deviceWidth / 2 > (isMouseHover ? currentX : randomMousePosition.randomX)
									? 'arrow-wrapper--left'
									: ''
							)}
							style={{
								left: `${isMouseHover ? currentX : randomMousePosition.randomX}px`,
								top: `${isMouseHover ? currentY : randomMousePosition.randomY}px`,
								transition: isMouseHover ? 'none' : 'all 1.5s ease',
							}}
						>
							<svg
								width="13"
								height="23"
								viewBox="0 0 13 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.6066 21.9203C10.9971 22.3109 11.6303 22.3109
								 12.0208 21.9203C12.4114 21.5298 12.4114 20.8966 12.0208 20.5061L2.82844 11.3137L12.0208
								 2.12134C12.4114 1.73082 12.4113 1.09766 12.0208 0.707133C11.6303 0.316608 10.9971
								 0.316608
								 10.6066 0.707132L1.41423 9.89952L0.435155 10.8786C0.405115 10.9086 0.378829
								  10.941 0.356299
								 10.9751C0.198588 11.214 0.224873 11.5386 0.435155 11.7489L1.41422 12.7279L10.6066
								  21.9203Z"
									fill="#fff"
								/>
							</svg>
						</div>
					</div>
				)}
			</StyledMedicationSwiper>
		</ReactHoverObserver>
	);
}
