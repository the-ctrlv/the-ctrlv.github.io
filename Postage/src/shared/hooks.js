import { useEffect, useState } from 'react';

export const mqMin = (breakpoint) => `screen and (min-width: ${breakpoint}px)`;
export const mqMax = (breakpoint) => `screen and (max-width: ${breakpoint}px)`;
// eslint-disable-next-line max-len
export const mqBetween = (breakpointSmall, breakpointLarge) => `screen and (min-width: ${breakpointSmall}px) and (max-width: ${breakpointLarge}px)`;

export function useWindowResize() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
}
export const getClassNames = (...args) => args.filter(Boolean).join(' ');

export const useClickOutside = (ref, callback) => {
	useEffect(() => {
		const handleClick = (evt) => {
			const refs = Array.isArray(ref) ? ref : [ref];
			if (refs.every((refItem) => refItem.current && !refItem.current.contains(evt.target))) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleClick);
		document.addEventListener('touchstart', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
			document.removeEventListener('touchstart', handleClick);
		};
	}, [ref, callback]);
};
export const useMousePosition = (isMouseHover, hoverTarget) => {
	const [mousePosition, setMousePosition] = useState({ currentX: null, currentY: null });

	const updateMousePosition = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		setMousePosition({ currentX: event.clientX, currentY: event.clientY - rect.top });
	};

	useEffect(() => {
		if (isMouseHover && hoverTarget) {
			hoverTarget.current.addEventListener('mousemove', updateMousePosition);
		} else {
			hoverTarget.current.removeEventListener('mousemove', updateMousePosition);
		}
		return () => { };
	}, [isMouseHover]);
	return mousePosition;
};

export const useMultiStepForm = (steps) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const next = () => {
		if (currentStepIndex < steps.length - 1) {
			setCurrentStepIndex(currentStepIndex + 1);
		}
	};
	const prev = () => {
		if (currentStepIndex > 0) {
			setCurrentStepIndex(currentStepIndex - 1);
		}
	};

	const isLastStep = currentStepIndex === steps.length - 1;
	const isFirstStep = currentStepIndex === 0;

	return {
		currentStep: steps[currentStepIndex],
		steps,
		next,
		prev,
		currentStepIndex,
		isLastStep,
		isFirstStep,
	};
};
