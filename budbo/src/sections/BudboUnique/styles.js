import styled from 'styled-components/macro';

import token from '../../assets/images/token.svg';


export const StyledBudboUnique = styled.div`
    @media (min-width: 768px) {
        overflow: hidden;
    }
    h2 {
        &.transformed {
            margin-top: -110px;
            margin-bottom: 30px;
        }
        &.margin-top {
            margin-top: 120px;
        }
        & + h3 {
            @media (max-width: 767px) {
                font-size: 20px;
            }
        }
    }
    p {
        &:nth-of-type(2),
        &:nth-of-type(3) {
            font-size: 20px;
            margin-top: 32px;
            color: var(--text-purple);
            line-height: 28px;
            span {
                color: #000;
            }
        }
    }
    .unique-img {
        margin: 80px 0;
        @media (max-width: 767px) {
            margin: 48px 0;
            /* width: calc(100% + 32px) !important; */
            transform:  scale(1.1);
        }
    }
    .violet-map {
        margin: 50px 0;
        background-color: #6E2DFA;
        color: #fff;
        border-radius: 48px;
        padding: 64px 41px;
        
        @media (min-width: 1200px) {
            width: calc(100% + 16vw);
            transform: translateX(-8vw);
        }

        @media (min-width: 1440px) {
            padding: 120px 130px;
            margin: 108px 0;
        }
        h2 {
            span {
                color: var(--orange);
                text-decoration: underline;
            }
        }
        img {
            @media (min-width: 768px) {
                margin-top: 65px;   
            }
        }
    }
    .unique-features {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        position: relative;
        margin: 32px 0 47px;
        li {
            position: relative;
            z-index: 1;
            border-radius: 16px;
            margin-bottom: 32px;
            padding: 32px 24px;
            @media (min-width: 992px) {
                width: calc(50% - 16px);
                padding: 44px;
            }
            img {
                width: 30px;
                height: 30px;
            }
            p {
                margin-top: 16px;
                line-height: 24px;
                font-size: 16px;
                color: var(--text-purple);
            }
            &:last-child {
                @media (min-width: 992px) {
                    transform: translateX(calc(50% + 16px));
                }
            }
        }
        &::before {
            content: '';
            display: block;
            width: 109px;
            height: 120px;
            background: url(${token}) center center/cover no-repeat;
            position: absolute;
            right: 20%;
            transform: translateX(50%);
            top: 14%;
            z-index: 0;
            @media (min-width: 992px) {
                right: 50%;
                top: 17%;
            }
        }
        & + h3 {
            @media (max-width: 767px) {
                font-size: 20px;
            }
        }
    }
    .cannabis-data {
        margin: 108px 0;
        @media (max-width: 767px) {
            padding-bottom: 50px;
            margin: 48px 0 32px;
        }
        li {
            &:not(:last-child) {
                margin-bottom: 64px;
                @media (min-width: 1440px) {
                    margin-bottom: 120px;
                }
            }
        }
        img {
            margin: 48px 0;
        }
        p {
            font-size: 20px;
            line-height: 28px;
            margin-bottom: 32px;
            &:not(.text-colored) {
                font-weight: 600;
            }
        }
    }
`