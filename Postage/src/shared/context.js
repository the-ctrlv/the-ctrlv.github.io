import { createContext } from 'react';

export const SmoothScrollContext = createContext({
	locoScroll: null,
	gsapScroll: {
		gsap: null,
		ScrollTrigger: null,
	},
});

export const AnimateStartContext = createContext({
	isAnimationFinished: false,
	setIsAnimationFinished: () => { },
});

export const DeviceModeContext = createContext({
	isMobileMode: false,
	isTabletMode: false,
});

SmoothScrollContext.displayName = 'SmoothScrollContext';
