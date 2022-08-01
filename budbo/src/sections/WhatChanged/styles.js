import styled from 'styled-components/macro';

import whatChangedImgMob from '../../assets/images/what-changed-image-mob.png'

export const StyledWhatChanged = styled.div`
    .width-wrapper {
        > h2 {
                margin-top: 169px;
            }
    }   
    .mob-img {
        height: 520px;
        position: relative;
        margin: 20px 0;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -16px;
            width: 100vw;
            height: 100%;
            background: url(${whatChangedImgMob}) center center /contain no-repeat;
        }
    } 
    h3 {
        margin-bottom: 48px;
    }
    .what-changed-img {
        margin: 90px 0 70px;
    }
    p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: var(--text-purple);
        span {
            color: #000;
            font-weight: 700;
        }
    }
    .offers {
        margin: 56px 0;
        @media (min-width: 992px) {
            margin: 96px 0;
        }
        
        li {
            margin-bottom: 48px;  
        }
    }
    .text {
        margin-bottom: 104px;
    }
   
`