import styled from 'styled-components/macro';

import owl from '../../assets/images/owl.svg';

export const StyledNotification = styled.div`
    background: #E6FBF7;
    border-radius: 24px;
    padding: 48px 24px;
    
    @media (min-width: 1200px) {
        padding: 58px 34px;
    }
    @media (min-width: 1440px) {
        transform: translateX(-120px);
        padding: 80px 120px;
    }
    h2   {
        font-size: 48px;
        line-height: 56px;
        @media (max-width: 1200px) { 
            font-size: 32px;
            line-height: 39px;
        }
    }
    h3 {
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
        transform: translateY(calc(-50% - 54px));
        @media (min-width: 1440px) {
            transform: translate3d(-120px, calc(-50% - 54px), 0);    
        }

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