import { useRef, useState } from 'react';
import { getClassNames, useClickOutside } from 'shared';
import { StyledAccordion } from './styles';

export default function Accordion({ question, answer }) {
	const [active, setActive] = useState(false);
	const clickRef = useRef(null);

	const toggleActive = () => {
		setActive(!active);
	};

	useClickOutside(clickRef, () => setActive(false));

	return (
		<StyledAccordion
			className={getClassNames('accordion', active ? 'active' : '')}
			ref={clickRef}
		// eslint-disable-next-line no-undef
		>
			<div className="accordion__header flex-between" onClick={toggleActive}>
				<p>
					{question}
				</p>
				<div className="accordion__icon">
					<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							// eslint-disable-next-line max-len
							d="M5.65698 5.23642L0.707107 0.286546L0 0.993652L5.65685 6.65051L5.6571 6.65026L5.65723 6.65039L11.3141 0.993536L10.607 0.28643L5.65698 5.23642Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>

			<div className="accordion__answer">
				<p>{answer}</p>
			</div>
		</StyledAccordion>
	);
}
