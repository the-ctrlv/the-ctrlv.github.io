import styled from 'styled-components';

import reason5mob from '../../assets/images/reason5-bg-mob.png';
import reason7mob from '../../assets/images/reason7-map-mob.png';
import token from '../../assets/images/token.svg';

export const StyledReasons = styled.div`
    .reasons-title {
        margin: 82px 0 -30px;
        max-width: 950px;
        span:first-of-type {
            text-decoration: underline;
        }
        @media (min-width: 1280px) and (max-width: 1440px) {
            max-width: 650px;
        }
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
    .reasons {
        padding: 90px 0;
        @media (max-width: 767px) {
            padding: 48px 0;
        }
        h6:first-of-type {
            color: var(--text-purple);
        }
    }
    .reason1 {
        
    }
    .reason2 {
        padding-bottom: 88px;
        @media (min-width: 768px) {
            padding-bottom: 170px;
        }
    }
    .ecosystem {
        margin-top: 60px;
        @media (max-width: 768px) {
            margin-top: 32px;
        }
        li {
            margin-bottom: 48px;
            padding-bottom: 48px;
            @media (max-width: 768px) {
                margin-bottom: 32px;
                padding-bottom: 32px;
            }
            &:last-child {
                margin: 0;
                padding: 0;
                border: none !important;
            }
        }
    }
    .reason3 {
        .table {
            margin: 20px 0 0 0;
        }
    }
    .reason4 {
        .mentor {
            margin: 60px 0 80px;
            @media (min-width: 992px) {
                margin: 100px 0 120px;
            }
            li {
                position: relative;
                p {
                    color: var(--text-purple);
                    font-size: 14px;
                    @media (min-width: 992px) {
                        text-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
                    }
                }
                &:last-child {
                    margin-bottom: 0 !important;
                }
                &::before {
                    content: '';
                    background-color: var(--text-purple);
                    position: absolute;
                    top: 9px;
                    left: -14px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    @media (min-width: 992px) {
                        box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
                    }
                }
            }
        }    
    }
    
    .reason5 {
        .img-wrapper {
            z-index: 1;
            @media (max-width: 767px) {
                height: 619px;
                margin-top: 48px;
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -16px;
                    width: 100vw;
                    height: 100%;
                    background: url(${reason5mob}) left center /contain no-repeat;
                }
            }
            img {
                margin-top: 78px;
            }
            @media (min-width: 992px) {
                &::before {
                    content: '';
                    display: block;
                    width: 109px;
                    height: 120px;
                    background: url(${token}) center center/cover no-repeat;
                    position: absolute;
                    left: -50px;
                    bottom: 20%;
                    z-index: -1;
                }
            }
        }
        .with-indent {
            &::before {
                box-shadow: none;
            }
        }
    }
    
    .reason6 {
        h4 {
            line-height: 32px;
        }
        .mentor {
            margin: 50px 0 0;
            @media (min-width: 992px) {
                margin: 80px 0 100px;    
            }
            ul {
                p {
                    &::before {
                        content: '';
                        background-color: var(--text-purple);
                        position: absolute;
                        top: 9px;
                        left: -14px;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                    }
                }
            }
             
            div {
                position: relative;
                p {
                    font-weight: 500;
                    font-size: 14px;
                    bottom: -50px;
                    line-height: 16px;
                    left: 0;
                    @media (min-width: 992px) {
                        bottom: -45px;
                    }
                }
            }
        }
    }

    .reason7 {
        padding-top: 90px;
        @media (max-width: 767px) {
            padding-top: 48px;
        }
        .map-wrapper {
            p {
                max-width: 550px;
                bottom: 0;
                left: 10%;
                position: absolute;
                z-index: 99;
                @media (max-width: 767px) {
                    margin-top: -50px;
                    position: relative;
                    left: 0;
                }
            }
            @media (max-width: 767px) {
                .mob-map {
                    height: 550px;
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -16px;
                        width: 100vw;
                        height: 100%;
                        background: url(${reason7mob}) center center /contain no-repeat;
                    }
                }
            }
        }
    }
`