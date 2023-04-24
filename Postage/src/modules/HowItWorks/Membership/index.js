import DOMPurify from 'isomorphic-dompurify';

import BenefitsList from 'components/BenefitsList';

import { StyledMembership } from './styles';

export default function Membership({ data }) {
	const clean = DOMPurify.sanitize(data.header.codeHeading);

	return (
		<StyledMembership
			className="membership"
			id="wrapper"
			filter={data.backgroundFilter}
			backgroundImage={data.backgroundImage.url}
		>
			<div
				className="membership__background-sticky desktop-data-scroll"
				data-scroll-sticky=""
				data-scroll-target="#wrapper"
			>
				<div
					className="membership__background-sticky__image"
					data-scroll
					data-scroll-speed="0.3"
					data-scroll-direction="horizontal"
					data-scroll-target="#wrapper"
				/>
				<div className="content-container ">
					<div className="membership__title-wrapper">
						<div>
							<span className="membership__pre-title fadeIn" data-scroll>
								{data.subHeading}
							</span>
							<div className="hero__title-wrapper" dangerouslySetInnerHTML={{ __html: clean }} />
						</div>

						<div>
							<span className="membership__line fadeIn" data-scroll />
							<p className="fadeIn" data-scroll>
								<strong>{data.cost.item.text[0]}</strong>
								{data.cost.item.text[1]}
							</p>
						</div>
					</div>
				</div>
			</div>

			<BenefitsList benefitsList={data.info.item} />

		</StyledMembership>
	);
}
