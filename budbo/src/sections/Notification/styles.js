import styled from 'styled-components/macro';

import owl from '../../assets/images/owl.svg';

export const StyledNotification = styled.div`
    background: #E6FBF7;
    border-radius: 24px;
    padding: 80px 120px;
    transform: translateX(-120px);
    h2   {
        font-size: 48px;
        line-height: 56px;
    }
    p {
       font-size: 32px; 
       font-weight: bold;
       margin-top: 32px;
       &.minimized {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: var(--text-purple);
       }
    }
    a {
        margin-top: 32px;
        background: #00B493;
        color: #fff;
        width: 100%;
        padding: 15px;
    }
    &.transformed {
        transform: translate3d(-120px, calc(-50% - 54px), 0);
        h2 {
            max-width: 85%;
        }
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 160px;
        height: 160px;
        background: url(${owl}) center center/cover no-repeat;
        transform: translateY(55%);
        
    }
`