import Link from 'next/link';
import { useContext, useEffect } from 'react';

import MouseFollowProvider from 'components/MouseFollowProvider';
import FaqList from 'components/FaqList';

import { useWindowResize } from 'shared';
import { AnimateStartContext, DeviceModeContext, SmoothScrollContext } from 'shared/context';

import { StyledFaq } from './styles';

export default function Faq({ data }) {
	const { isTabletMode } = useContext(DeviceModeContext);
	const { gsapScroll } = useContext(SmoothScrollContext);
	const { isAnimationFinished } = useContext(AnimateStartContext);

	const gsap = gsapScroll?.gsap;
	const { width } = useWindowResize();

	useEffect(() => {
		if (width >= 1024 && width !== 0) {
			const desktopDataScroll = document.querySelectorAll('.desktop-data-scroll');
			desktopDataScroll.forEach((item) => {
				item.setAttribute('data-scroll', '');
			});
		}
	}, [width]);

	useEffect(() => {
		if (isAnimationFinished && width >= 1024) {
			const scrollBarPosition = document.querySelector('.faq__scroll-bar').clientHeight - 120;
			gsap.to('.faq__scroll-bar__line', {
				y: `${scrollBarPosition}px`,
				ease: 'linear',
				scrollTrigger: {
					trigger: '.faq',
					start: 'top top',
					end: 'bottom bottom',
					scrub: 1,
				},
			});
		}
	}, [gsap, isAnimationFinished, isTabletMode]);

	const faqMessageContent = (
		<div className="faq__message fadeIn" data-scroll>
			<span className="faq__message__text">{data.tagline[0].text}</span>
			<Link href={data.button.route} className="btn fadeIn" data-scroll>
				<div className="title-wrapper">
					<span>{data.button.text}</span>
					<span>{data.button.text}</span>
				</div>
			</Link>
		</div>
	);

	return (
		<MouseFollowProvider>
			<StyledFaq className="faq" id="faqWrapper">
				<div className="content-container">
					<div
						className="faq__background-sticky desktop-data-scroll"
						data-scroll-sticky=""
						data-scroll-target="#faqWrapper"
					>
						<div className="faq__sticky-content">
							{width >= 1024 && (
								<div className="faq__scroll-bar">
									<div className="faq__scroll-bar__line" />
								</div>
							)}
							<div className="faq__title-wrapper">
								<span className="faq__pre-title fadeIn" data-scroll>
									{data.subHeading}
								</span>
								<h2 className="section-title fadeIn" data-scroll>
									{data.header.heading}
								</h2>
							</div>
							{width >= 1024 && faqMessageContent}
						</div>
					</div>
					<div className="faq__list-wrapper">
						<FaqList faq={data.faq} />
					</div>
					{width <= 1023 && faqMessageContent}
				</div>
			</StyledFaq>
		</MouseFollowProvider>
	);
}
