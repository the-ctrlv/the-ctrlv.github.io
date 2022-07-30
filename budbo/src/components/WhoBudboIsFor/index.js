import { useEffect, useState } from 'react';

import { StyledWhoBudboIsFor } from './style';
import { mockBudboApp, mockBudboConnect, mockBudboTrax } from './constants';

function WhoBudboIsFor({ contentToShow }) {

    const [currentTitle, setCurrentTitle] = useState('Budbo App');

    const currentContent = () => {
        switch (contentToShow) {
            case 'app':
                return mockBudboApp
            case 'connect':
                return mockBudboConnect
            case 'trax':
                return mockBudboTrax
            default:
                return mockBudboApp
        }
    };

    useEffect(() => {
        if (contentToShow === 'app') {
            setCurrentTitle('Budbo App');
        } else if (contentToShow === 'connect') {
            setCurrentTitle('Budbo Connect');
        } else if (contentToShow === 'trax') {
            setCurrentTitle('Budbo Trax');
        }
    }, [contentToShow]);


    return (
        <StyledWhoBudboIsFor className={`budbo-${contentToShow}`}>
            <h2>Who <span>{currentTitle}</span> Is For?</h2>
            <ul className='content d-flex justify-content-between position-relative flex-wrap px-4'>
                {currentContent().map((item, index) => (
                    <li key={index} className='d-flex align-items-center rounded bg-white justify-content-center'>
                        <img src={item.logo} alt={item.title} className="me-3" />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </StyledWhoBudboIsFor>
    );
}
export default WhoBudboIsFor;