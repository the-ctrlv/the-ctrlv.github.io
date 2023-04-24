import Image from 'next/image';
import Link from 'next/link';

import DOMPurify from 'isomorphic-dompurify';

import { useContext } from 'react';

import { DeviceModeContext } from 'shared/context';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledAssessment } from './styles';

export default function Assessment({ data }) {
	const { isTabletMode } = useContext(DeviceModeContext);
	const clean = DOMPurify.sanitize(data.header.codeHeading);
	return (
		<MouseFollowProvider>
			<StyledAssessment className="assessment fadeIn" data-scroll>
				<div className="content-container">
					{isTabletMode && <div className="assessment__ellipse-mob-container" />}
					<div className="content flex-between">

						<div
							style={{ width: '100%' }}
							dangerouslySetInnerHTML={{ __html: clean }}
						/>

						<Image
							priority
							className="bottle"
							src={data.image.url}
							height={data.image.metadata.dimensions.height}
							width={data.image.metadata.dimensions.width}
							alt={data.image.alt}
						/>
					</div>
					<div className="assessment__bottom flex-between">
						<p>{data.subHeading}</p>
						<span className="line" />
						<Link className="btn" href={data.button.route}>
							<div className="title-wrapper">
								<span>{data.button.text}</span>
								<span>{data.button.text}</span>
							</div>
						</Link>
					</div>
				</div>
			</StyledAssessment>
		</MouseFollowProvider>
	);
}
