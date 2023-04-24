import { useContext, useEffect, useState } from 'react';

import Image from 'next/image';

import { getClassNames } from 'shared';

import loaderLogo from 'assets/images/loader-logo.svg';
import loaderTitle from 'assets/images/loader-title.svg';

import { AnimateStartContext, SmoothScrollContext } from 'shared/context';
import { StyledLoader } from './styles';

export default function Loader() {
	const [isVisible, setIsVisible] = useState(true);

	const { gsapScroll, locoScroll } = useContext(SmoothScrollContext);
	// eslint-disable-next-line no-unused-vars
	const { setIsAnimationFinished } = useContext(AnimateStartContext);

	const gsap = gsapScroll?.gsap;

	useEffect(() => {
		locoScroll?.stop();
		gsap?.to('.loader-element', {
			y: 0,
			onComplete: () => {
				setTimeout(() => {
					setIsAnimationFinished(true);
				}, [2000]);
			}
		});
	}, [gsap, locoScroll]);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(false);
			locoScroll?.start();
		}, 2000);
	}, [locoScroll]);

	return (
		<StyledLoader
			className={getClassNames('loader', isVisible ? '' : 'hidden')}
			data-scroll
			data-scroll-sticky=""
			data-scroll-target="#main"
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100vh',
				backgroundColor: '#788B7E',
				zIndex: '9999',
				transition: 'opacity 900ms cubic-bezier(.445, .05, .55, .95)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<div
				className="loader-container"
				style={{
					height: loaderLogo.height,
					width: loaderLogo.width,
					overflow: 'hidden',
				}}
			>
				<Image
					priority
					src={loaderLogo.src}
					alt="loader-logo"
					className="loader-element"
					height={loaderLogo.height}
					width={loaderLogo.width}
					style={{
						transform: 'translateY(100px)',
					}}
				/>
			</div>
			<div className="progress-wrapper">
				<div
					className="loader-container"
					style={{
						height: loaderTitle.height,
						width: loaderTitle.width,
						overflow: 'hidden',
					}}
				>
					<Image
						priority
						src={loaderTitle.src}
						alt="loader-title"
						className="loader-element"
						height={loaderTitle.height}
						width={loaderTitle.width}
						style={{
							transform: 'translateY(100px)',
						}}
					/>
				</div>
				<div className="progress-line">
					<div className="progress-line__inner" />
				</div>
			</div>

		</StyledLoader>
	);
}
