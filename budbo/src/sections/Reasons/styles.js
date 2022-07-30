import styled from 'styled-components';

import token from '../../assets/images/token.svg';

export const StyledReasons = styled.div`
    .reasons-title {
        margin: 82px 0 -30px;
        line-height: 64px;
        span:first-of-type {
            text-decoration: underline;
        }
    }
    .reasons {
        padding: 90px 0;
        h6:first-of-type {
            color: var(--text-purple);
        }
    }
    .reason1 {
        
    }
    .reason2 {
        padding-bottom: 170px;
    }
    .ecosystem {
        margin-top: 60px;
        li {
            margin-bottom: 48px;
            padding-bottom: 48px;
            &:last-child {
                margin: 0;
                padding: 0;
                border: none !important;
            }
        }
    }
    .reason3 {
    }
    .phone-slider {
        margin-top: 80px;
        div {
            img {
                height: 80%;
                width: 80%;
            }
            &:nth-child(2) {
                img {
                    width: 100%;
                }
            }
        }
    }
    .reason4 {
        .mentor {
            margin: 100px 0 120px;
            li {
                position: relative;
                p {
                    color: var(--text-purple);
                    font-size: 14px;
                    text-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
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
                    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    text-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
                }
            }
        }    
    }
    
    .reason5 {
        .img-wrapper {
            z-index: 1;
            img {
                margin-top: 78px;            
            }
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
            margin: 80px 0 100px;
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
             
            > p {
                font-weight: 500;
                font-size: 14px;
                bottom: -45px;
                line-height: 16px;
                left: 0;
            }
        }
    }

    .reason7 {
        padding-top: 90px;
        .map-wrapper {
            p {
                max-width: 550px;
                bottom: 0;
                left: 10%;
            }
        }
    }
`