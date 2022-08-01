import styled from 'styled-components/macro';

import mainBg from '../../assets/images/main-bg.png';
import mainBgMob from '../../assets/images/main-bg-mob.png';

export const StyledMain = styled.section`
    min-height: 92vh;
    > div {
        z-index: 1;
        h1 {
            color: var(--primary);
            
            .slogan {
                color: #000;    
            }
        }
        p {
            color: var(--text-purple);
            font-weight: 500;
            line-height: 28px;
            max-width: 600px;
        }
        button {
            padding: 27px 79px;
            font-size: 20px;
        }
    }
    &::after {
        content: '';
        position: absolute;
        z-index: 0;
        bottom: -12vh;
        right: 0;
        display: block;
        width: 50vw;
        height: 94vh;
        background: url(${mainBg}) right bottom /contain no-repeat;
        @media (max-width: 768px) {
            background: url(${mainBgMob}) right bottom /contain no-repeat;
                bottom: -180px;
                right: 0;
                display: block;
                width: 100vw;
                height: 94vh;
        }
    }
`