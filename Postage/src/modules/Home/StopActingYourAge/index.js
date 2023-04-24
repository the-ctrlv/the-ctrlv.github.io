import Link from 'next/link';

import { StyledStopActingYourAge } from './styles';

export default function StopActingYourAge({ data }) {
	return (
		<StyledStopActingYourAge className="stop-acting-your-age fadeIn" data-scroll>
			<h3>{data.header.heading}</h3>
			<Link href={data.button.route} className="btn">
				<div className="title-wrapper">
					<span>{data.button.text}</span>
					<span>{data.button.text}</span>
				</div>
			</Link>
		</StyledStopActingYourAge>
	);
}
