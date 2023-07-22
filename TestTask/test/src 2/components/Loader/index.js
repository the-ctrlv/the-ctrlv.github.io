import { useEffect, useState } from 'react';
import { StyledLoader } from './styles';
import { getClassNames } from '../../shared/functions';

export default function Loader() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(false);
		}, 500);
	}, []);

	return (
		<StyledLoader
			className={getClassNames('loader', isVisible ? '' : 'hidden')}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: '#fff',
				zIndex: '9999',
				transition: 'opacity 900ms cubic-bezier(.445, .05, .55, .95)',
			}}
		/>
	);
}
