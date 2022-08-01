import arrowSm from '../../assets/images/arrow-sm.svg';
import { getClassNames } from '../../shared';
import { StyledNotification } from './styles';
function Notification({ title, description, link, linkText, transformed, minimized }) {
    return (
        <StyledNotification className={getClassNames('container', transformed ? 'col-md-10' : '')}>
            <div className={getClassNames('position-relative col-12',
                transformed ? 'transformed' : '')}>
                <h2>{title}</h2>
                {description && <h3 className={getClassNames(minimized ? 'minimized' : '')}>{description}</h3>}
                <a href={link} className='btn'>
                    {linkText}
                    <img src={arrowSm} alt='arrow' className='ms-1' />
                </a>
            </div>
        </StyledNotification >
    )
}

export default Notification;