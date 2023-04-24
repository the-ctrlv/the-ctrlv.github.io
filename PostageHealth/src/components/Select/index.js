/* eslint-disable consistent-return */
import { useContext, useEffect, useState } from 'react';

import { getClassNames } from 'shared';
import { SmoothScrollContext } from 'shared/context';
import { BLOGNAV, POLICYNAV } from 'shared/helpers';

import { StyledSelect } from './styles';

const contactFormValues = [
	{ value: 'Billing', label: 'BILLING' },
	{ value: 'Membership', label: 'MEMBERSHIP' },
	{ value: 'Other', label: 'OTHER' },
];

const stateValues = [
	{ value: 'Alabama', label: 'Alabama' },
	{ value: 'Alaska', label: 'Alaska' },
	{ value: 'Arizona', label: 'Arizona' },
	{ value: 'Arkansas', label: 'Arkansas' },
	{ value: 'California', label: 'California' },
	{ value: 'Colorado', label: 'Colorado' },
];

export default function Select({ onChange,
	isInvalid,
	variant,
	setIsStateChosen,
	setFilterTag, assessmentOptions, defaultValue }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentData, setCurrentData] = useState(null);
	const [placeholder, setPlaceholder] = useState(null);
	const { locoScroll } = useContext(SmoothScrollContext);

	const onScrollTo = (e) => {
		locoScroll?.scrollTo(e.scrollTo);
	};
	const handleFilter = (e) => {
		setFilterTag(e.filter);
	};

	useEffect(() => {
		switch (variant) {
			case 'blog':
				setPlaceholder('Select a filter');
				setCurrentData(BLOGNAV);
				break;
			case 'policy-terms':
				setPlaceholder('Select a topic');
				setCurrentData(POLICYNAV);
				break;
			case 'contact':
				setPlaceholder('REASON');
				setCurrentData(contactFormValues);
				break;
			case 'assessment':
				setPlaceholder('Select');
				setCurrentData(assessmentOptions);
				break;
			case 'states':
				setPlaceholder('Select a state');
				setCurrentData(stateValues);
				break;
			default:
				return null;
		}
	}, [variant]);

	return (
		<StyledSelect
			className={getClassNames(
				'select',
				isMenuOpen ? 'active' : '',
				isInvalid ? 'invalid' : '',
				variant === 'policy-terms' || variant === 'blog' ? 'scroll-to-select' : '',
				variant === 'assessment' ? 'assessment-select' : '',
			)}
			placeholder={placeholder}
			defaultValue={assessmentOptions?.find((value) => value.value === defaultValue) || null}
			options={currentData}
			onMenuOpen={() => {
				setIsMenuOpen(true);
				locoScroll?.stop();
			}}
			onMenuClose={() => {
				setIsMenuOpen(false);
				locoScroll?.start();
			}}
			instanceId="select"
			isSearchable={false}
			onChange={(e) => {
				if (variant === 'contact' || variant === 'assessment') {
					onChange(e);
				}
				if (variant === 'policy-terms') {
					onScrollTo(e);
				}
				if (variant === 'blog') {
					handleFilter(e);
				}
				if (variant === 'states') {
					setIsStateChosen(true);
				}
			}}
		/>
	);
}
