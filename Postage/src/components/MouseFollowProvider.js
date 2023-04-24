import { useEffect, useRef, useState } from 'react';
import ReactHoverObserver from 'react-hover-observer';

import { getClassNames, useMousePosition, useWindowResize } from 'shared';

export default function MouseFollowProvider({ children, light }) {
	const hoverTarget = useRef(null);

	const [isMouseHover, setIsMouseHover] = useState(false);
	const { currentX, currentY } = useMousePosition(isMouseHover, hoverTarget);
	const [randomMousePosition, setRandomMousePosition] = useState({ randomX: null, randomY: null });
	const { width } = useWindowResize();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(width < 700);
	}, [width]);

	useEffect(() => {
		if (!isMouseHover) {
			setRandomMousePosition({
				randomX: hoverTarget.current.clientWidth * Math.random(),
				randomY: hoverTarget.current.clientHeight * Math.random(),
			});
		}
	}, [isMouseHover]);

	return (
		<ReactHoverObserver
			onMouseLeave={() => setIsMouseHover(false)}
			onMouseOver={() => setIsMouseHover(true)}
			className="react-hover-observer"
		>
			<div
				ref={hoverTarget}
				className={getClassNames(
					'mouse-follow',
					light ? 'mouse-follow--light' : '',
				)}
			>

				{children}

				{!isMobile && (
					<div
						className="mouse-follow__wrapper"
					>
						<div
							className="
								mouse-follow__circle"
							style={{
								left: `${isMouseHover ? currentX : randomMousePosition.randomX}px`,
								top: `${isMouseHover ? currentY : randomMousePosition.randomY}px`,
								transition: 'all 3s cubic-bezier(.22,.68,0,1.71)',
							}}
						/>
					</div>
				)}
			</div>
		</ReactHoverObserver>
	);
}
