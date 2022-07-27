import { useRef, useState } from 'react';

import arrow from '../../assets/images/arrow.svg';
import { getClassNames, useOnClickOutside } from '../../shared';

export const Accordion = (props) => {
    const [active, setActive] = useState(false);
    const clickRef = useRef(null);

    const toggleActive = () => {
        setActive(!active);
    }
    useOnClickOutside(clickRef, () => setActive(false));

    return (
        <li ref={clickRef} className={getClassNames('accordion cursor-pointer border-bottom', active ? 'active' : '')}>
            <div className='d-flex align-items-center justify-content-between p-3'
                onClick={toggleActive}>
                <h4>{props.title}</h4>
                <img src={arrow} alt='arrow' className='arrow' />
            </div>
            <p className='px-3'>
                The subscription agreement will be sent in a period of ten business days. If there are any AML
                (anti-money laundering) issues, this process may be delayed.
            </p>
        </li>
    )
}

export default Accordion;