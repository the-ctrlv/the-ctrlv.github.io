import styled from 'styled-components/macro';

import mainBg from '../../assets/images/main-bg.png';

export const StyledMain = styled.section`
    min-height: 100vh;
    > div {
        z-index: 1;
        h1 {
            font-size: 72px;
            color: var(--primary);
            line-height: 88px;
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
        bottom: 0;
        right: 0;
        display: block;
        width: 50vw;
        height: 94vh;
        background: url(${mainBg}) right bottom /contain no-repeat;
    }
`