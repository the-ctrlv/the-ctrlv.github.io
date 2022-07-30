import styled from 'styled-components/macro';

import tokenMirror from '../../assets/images/token-mirror.svg';

export const StyledWhoBudboIsFor = styled.div`
    border-radius: 24px;
    transform: translateY(20%);
    position: relative;
    padding: 80px 120px;
    h2 {
        width: 100%;
        text-align: center;
        margin-bottom: 32px;
    }
    .content {
        li {
            width: calc(50% - 12px);
            margin-bottom: 24px; 
            padding: 16px 0;
            &:last-child {
                transform: translateX(calc(50% + 12px));
                margin-bottom: 0 !important;
            }
        }
    }
    &.budbo-app {
        background-color: #DDCEFD;
        h2 {
            span {
                color: var(--primary);
            }
        }
        .content {
            li {
                &:last-child {
                    width: auto !important;
                    padding: 16px 24px;
                    transform: translateX(37%);
                }
            }
        }
    }
    &::before {
            content: '';
            display: block;
            width: 109px;
            height: 120px;
            background: url(${tokenMirror}) center center/contain no-repeat;
            position: absolute;
            right: 50%;
            transform: translate3d(50%, -50%, 0);
            top: 0;
            z-index: 0;
        }
    &.budbo-trax {
        background-color: #CEF1FF;
        h2 {
            span {
                color: var(--aqua);
            }
        }
    }
    &.budbo-connect {
        background-color: #FFE7D3;
        h2 {
            span {
                color: var(--orange);
            }
        }
        .content {
            li:last-child {
                transform: translate(0);
            }
        }
    }
`