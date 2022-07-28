import arrowSm from '../../assets/images/arrow-sm.svg';
import { getClassNames } from '../../shared';
import { StyledNotification } from './styles';
function Notification({ title, description, link, linkText, transformed, minimized }) {
    return (
        <StyledNotification className={getClassNames('position-relative w-100', transformed ? 'transformed' : '')}>
            <h2>{title}</h2>
            {description && (<p className={getClassNames(minimized ? 'minimized' : '')}>{description}</p>)}
            <a href={link} className='btn'>
                {linkText}
                <img src={arrowSm} alt='arrow' className='ms-1' />
            </a>
        </StyledNotification>
    )
}

export default Notification;