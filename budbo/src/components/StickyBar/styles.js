import styled from 'styled-components/macro';

import sideBarImg from '../../assets/images/sidebar-img.png';
import swiperArrow from '../../assets/images/swiper-arrow.svg';
import tokenMirror from '../../assets/images/token-mirror.svg';
export const StyledStickyBar = styled.div`
        height: 100%;
        right: 5vw;
        top: 0;
        padding: 54px 0;
        width: 350px;
        @media (min-width: 1440px) {
            right: 10vw;    
        }
        .sticky-container {
            top: 54px;
            background-color: #F3F1F8;
            z-index: 1;
            .top-content {
                padding: 0 24px 32px;
                z-index: 5;
                position: relative;
                color: var(--text-purple);
                h6 {
                    font-weight: 500;
                }
                a {
                    color: var(--primary);
                    font-weight: bold;
                }
                ul {
                    padding: 58px 24px 16px;
                    li {
                        margin-bottom: 16px;
                        width: 50%;
                        span {
                            display: block;
                            &:first-of-type {
                                font-size: 14px;
                            }
                            &:last-of-type {
                                font-size: 16px;
                                color: #000;
                            }
                        }
                    }
                }
            }
            &::after {
                content: '';
                position: absolute;
                top: 17%;
                right: 0;
                width: 100px;
                height: 300px;
                background: url(${sideBarImg}) center right/contain no-repeat;
            }   
            &::before {
                content: '';
                position: absolute;
                top: 257px;
                left: 24px;
                width: 320px;
                height: 1px;
                background-color: #dee2e6;
            }
        }
        .ghost-container {
            top: 54px;
            z-index: 0;
            height: calc(100% - 108px);
            width: 350px;
            > div {
                top: 54px;
                height: 810px;
                &::before {
                    content: '';
                    position: absolute;
                    top: 450px;
                    right: -60px;
                    z-index: -1;
                    width: 109px;
                    height: 120px;
                    background: url(${tokenMirror}) center right/contain no-repeat;
                }
            }
             
        }





        // line deleted  from react-select
        .css-319lph-ValueContainer {
            padding: 2px 0 2px 20px;
            cursor: pointer;
        }
        .css-1okebmr-indicatorSeparator {
            display: none;
        }
        .css-tlfecz-indicatorContainer,
        .css-1gtu0rj-indicatorContainer {
            transform: scale(0.7) translateX(-5px);
            cursor: pointer;
        }
        .css-1s2u09g-control,
        .css-1pahdxg-control {
            border-color: hsl(0, 0%, 80%) !important;
            box-shadow: none !important;
            background-color: #FCFBFF;
        }
        .css-26l3qy-menu {
            z-index: 2;
            overflow: hidden;
        }
        .css-9gakcf-option {
            background-color: #fff;
            border-bottom: 1px solid hsl(0, 0%, 80%);
            &:active {
                background-color: #fff;
            }
        }
        .css-9gakcf-option {
            cursor: pointer;
            &:hover {
                background-color: #f0f0f0;
            }
        }
        .css-4ljt47-MenuList {
            padding: 0;
        }
        
`

export const StyledSwiper = styled.div`
    padding: 24px;
    .swiper {
        padding-bottom: 30px;
        p {
            font-size: 16px;
            line-height: 24px;
        }
    }
    /* .swiper-pagination {
        bottom: -20px;
    } */
    .swiper-button-prev,
    .swiper-button-next {
        top: auto;
        bottom: -8px;
        &::after {
            content: '';
            width: 20px;
            height: 10px;
        }
    }
    .swiper-button-prev {
        left: 75px;
        &::after {
            background: url(${swiperArrow}) center center/contain no-repeat;
            transform: rotate(180deg);
        }
    }

    .swiper-button-next {
        right: 75px;
        &::after {
            background: url(${swiperArrow}) center center/contain no-repeat;
        }
    }
    
`

export const StyledOptions = styled.p`
    color: var(--text-purple);
    font-size: 14px;
    span {
        font-size: 12px;
        border-radius: 8px;
        padding: 0 5px;
        height: 25px;
        background-color: #F3F1F8;
    }

`
