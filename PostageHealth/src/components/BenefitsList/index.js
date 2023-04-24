import { useContext, useEffect, useState } from 'react';
import { useWindowResize } from 'shared';
import { SmoothScrollContext } from 'shared/context';

import { StyledBenefitsList } from './styles';

export default function BenefitsList({ benefitsList }) {
	const [isTabletMode, setIsTabletMode] = useState(null);
	const { width } = useWindowResize();
	const { locoScroll } = useContext(SmoothScrollContext);
	useEffect(() => {
		if (width === 0) return;
		setIsTabletMode(width < 1024);
		locoScroll?.update();
	}, [width, isTabletMode, locoScroll]);

	return (
		<StyledBenefitsList className="content-container content-container--list fadeIn" data-scroll>
			<ul
				className="benefits-list fadeIn"
				data-scroll
			>
				{benefitsList.map((item, i) => (
					<li key={i} className="benefits-list__item">
						<span className="benefits-list__item__circle" />
						<div className="benefits-list__item__text">
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</li>
				))}
			</ul>
		</StyledBenefitsList>
	);
}
