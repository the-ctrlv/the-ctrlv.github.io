import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro'

import GilroyBoldWoff from './assets/fonts/Gilroy-Bold.woff';
import GilroyBoldWoff2 from './assets/fonts/Gilroy-Bold.woff2';
import GilroyMediumWoff from './assets/fonts/Gilroy-Medium.woff';
import GilroyMediumWoff2 from './assets/fonts/Gilroy-Medium.woff2';
import GilroyMediumItalicWoff from './assets/fonts/Gilroy-MediumItalic.woff';
import GilroyMediumItalicWoff2 from './assets/fonts/Gilroy-MediumItalic.woff2';
import GilroySBoldWoff from './assets/fonts/Gilroy-Semibold.woff';
import GilroySBoldWoff2 from './assets/fonts/Gilroy-Semibold.woff2';
import token from './assets/images/token.svg';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyBoldWoff2}) format('woff2'), url(${GilroyBoldWoff}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroySBoldWoff2}) format('woff2'), url(${GilroySBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyMediumWoff2}) format('woff2'), url(${GilroyMediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyMediumItalicWoff2}) format('woff2'), url(${GilroyMediumItalicWoff}) format('woff');
        font-weight: 500;
        font-style: italic;
    }

    :root {
        --primary: #6E2DFA;
        --text-purple: #736B8E;
        --orange: #FF9644;
        --aqua: #30C6FF;
    }
    body {
        font-family: 'Gilroy';
        background-color: #F3F1F8;
        color: #000;
        font-weight: 500;
    }
    h1 {
        font-size: 72px;
    }
    h2 {
        font-size: 56px;
        @media (max-width: 992px) {
            font-size: 32px;
        }
    }
    h3 {
        font-size: 32px;
        line-height: 38px;
        @media (max-width: 992px) {
            font-size: 24px;
            line-height: 28px;
        }
    }
    h4 {
        @media (max-width: 992px) {
            font-size: 20px;
            line-height: 28px;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: bold;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    .text-body {
        color: #000 !important;
    }
    p {
        margin: 0;
        font-size: 20px;
        line-height: 28px;
        @media (max-width: 992px) {
            font-size: 16px;
            line-height: 24px;
        }
    }
    .container {
        @media (max-width: 767px) {
            padding: 16px;
            margin: 0;
        }
    }
    .text-primary {
        color: var(--primary) !important;
    }
    .text-colored {
        color: var(--text-purple);
        font-weight: 500;
    }
    .btn-primary {
        background-color: var(--primary);
        border-radius: 8px !important;
    }
    .rounded {
        border-radius: 8px !important;
    }
    .width-wrapper {
        @media (max-width: 1440px) {
            margin: 0 auto;
        }
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .table {
        margin: 31px 0 50px;
        @media (min-width: 1200px) {
            width: calc(100% + 16vw);
            transform: translateX(-8vw);
        }
    }
    .with-indent {
        position: relative;
        margin-left: 40px;
        &::before {
            content: '';
            background-color: var(--text-purple);
            position: absolute;
            top: 9px;
            left: -20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
        }
    }
`

export const StyledWhiteWrapper = styled.div`
    background-color: #fff;
    position: relative;
    width: calc(100vw - 64px);
    margin: 0 32px;
    padding: 54px;
    border-radius: 48px;
    margin-bottom: 90px;
    @media (max-width: 767px) {
        width: 100%;
        .container {
            padding: 0;
            margin: 0;
            max-width: none;
        }
    }
    .notification-wrapper {
        top: -50%;
        transform: translateY(-50%);
    }
    .video-container {
        position: relative;
        z-index: 1;
        iframe {
            border-radius: 24px;
            width: calc(100% - 350px);
        }   
        &::before {
                content: '';
                display: block;
                width: 109px;
                height: 120px;
                background: url(${token}) center center/cover no-repeat;
                position: absolute;
                left: 0;
                top: -150px;
                z-index: -1;
            }     
    }
    &.exception-mobile {
        @media (max-width: 767px) {
            padding: 0;
            background-color: transparent;
        }
    }
    @media (max-width: 767px) {
        padding: 0 16px;
        margin: 0;
    }
`

export const StyledColoredWrapper = styled.div`
    margin-bottom: 185px;
    position: relative;
    z-index: 1;
    @media (max-width: 1600px) {
        margin: 0 auto 145px;
    }
    @media (max-width: 1600px) {
        margin: 0 auto 145px;
    }
    p {
        &.text {
            margin: 25px 0 100px
        }
    }
    .uma-img {
        width: 80%;
        margin: 0 auto 66px;
    }
    .with-indent {
        &::before {   
            box-shadow: none;
        }
    }
    .connect-img {
        transform: translateY(-10%);
    }
    &.connect {
        padding-top: 0;
        margin-bottom: 290px;
        @media (max-width: 767px) {
            margin-bottom: 48px;
        }
        h3 {
            span {
                color: var(--orange);
            }
        }
        &::before {
            background-color: #FFF5EC;
        }
    }
    &.trax {
        padding-top: 0;
        margin: 350px 0 300px;
        @media (max-width: 1440px) {
            margin: 200px auto 150px;
        }
        @media (max-width: 767px) {
            margin: 136px auto 94px;
        }
        h3 {
            span {
                color: var(--aqua);
            }
        }
        .transformed {
            margin-top: -220px;
        }
        .trax-img {
            width: calc(100% + 32px);
            transform: translate3d(-16px, -15%, 0);
            margin-bottom: 160px;
            @media (min-width: 768px) {
                width: 90%;
                margin: 0 auto 0;
                transform: translateY(-28%);    
            }
        }
        .what-inside-title {
            margin-top: 80px;
        }
        @media (max-width: 767px) {
            .content {
                li {
                    &:nth-of-type(5),
                    &:nth-of-type(6),
                    &:nth-of-type(7) {
                        display: none !important; 
                    }
                }   
            }
        }
        
        &::before {
            background-color: #EAF9FF;
        }
    }
    &::before {
        content: '';
        position: absolute;
        top: -6vw;
        z-index: -1;
        left: -8vw;
        width: calc(100% + 16vw);
        height: calc(100% + 6vw);
        background-color: #F1EAFE;
        border-radius: 48px;
        @media (max-width: 768px) {
            width: calc(100% + 32px);
            left: -16px;
        }

    }
`

export const StyledInsideUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    margin-top: 32px;
    @media (min-width: 992px) {
        margin-bottom: 200px;
    }
    li {
        height: 170px;
        border-radius: 16px;
        margin-bottom: 32px;
        padding: 0 5px 0 24px;
        width: 100%;
        @media (min-width: 992px) {
            padding: 0 48px;
            width: calc(50% - 16px);
        }
    }
    &.trax {
        margin-bottom: 10px;
    }
`

export const getClassNames = (...args) =>
    args.filter(Boolean).join(' ');

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export function useMobileMode() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth < 768;
}